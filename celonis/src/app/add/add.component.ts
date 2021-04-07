import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { ToastrService } from 'ngx-toastr';
import * as Stomp from 'stompjs';
import { Task } from '../models/task';


@Component({
  selector: 'app-add.component',
  templateUrl: '../add/add.component.html',
  styleUrls: ['../add/add.component.css']
})

export class AddComponent implements OnInit {
  data = new Task();
  savedTask;
  createForm: FormGroup;
  stepTittle = 'Choose task type (1/4)';
  showStep = 1;
  wsData: any = [];
  ws: any;


  constructor(public taskService: TaskService,
              private router: Router,
              private fb: FormBuilder,
              private toasterService: ToastrService) {

    let socket = new WebSocket("ws://localhost:8080/ws");
    this.ws = Stomp.over(socket);
    this.filteredLS();
  }

  wsConnect(id) {
    let socket = new WebSocket("ws://localhost:8080/ws");
    this.ws = Stomp.over(socket);
    let that = this;
    this.ws.connect({}, () => {
      this.ws.subscribe("/topic/notify/" + id, (message:any) =>  {
        that.wsData = JSON.parse(message.body);
        if (that.wsData.x == that.wsData.y) {
          that.goTostep(5);
        }
      });
    }, function(error) {
      alert("STOMP error " + error);
    });
  }

  setActiveQueue(queue) {
    var data = JSON.stringify({
      'queue' : queue
    })
    this.ws.send("/app/message", {}, data);
  }

  gotToList(){
    this.setActiveQueue("all");
    if (this.showStep == 2) {
      console.log('Lets save to localstorage!');
      if (Number.isInteger(this.data.x) && Number.isInteger(this.data.y) && this.createForm.valid) {
        this.data.status = 'Not configured';
        const randomnumber = Math.floor(Math.random() * (9999)) + 1;
        localStorage.setItem('toBeStored-' + randomnumber, JSON.stringify(this.data));
      }
      localStorage.removeItem('ToBeCreated');
    }
    this.router.navigate(['']);
  }

  filteredLS() {
    if (localStorage.getItem('ToBeCreated')) {
      let toBeCreated = JSON.parse(localStorage.getItem('ToBeCreated'));
      if (Number.isInteger(toBeCreated.x) && Number.isInteger(toBeCreated.y)) {
        console.log('berjoulia mhaf');
        this.goTostep(2);
        this.data.x = toBeCreated.x;
        this.data.y = toBeCreated.y;
      //  localStorage.removeItem('ToBeCreated');
      }
    }
  }

  goTostep(x: number) {
    switch (x) {
      case 2: {
        this.stepTittle = 'Configure Task (2/4)';
        this.showStep = 2;
        break;
      }
      case 3: {
        this.stepTittle = 'Execute Task (3/4)';
        this.showStep = 3;
        this.data.name = 'Counter';
        this.taskService.createTask(this.data).subscribe(
          (result) => {
            this.savedTask = result;
            this.toasterService.success('Counter task successfully added', 'SUCCESS');
          }, (err) => {
            this.toasterService.error('Counter task cannot be added', 'ERROR');
          }
        );
        break;
      }
      case 4: {
        this.stepTittle = 'Execute Task (3/4)';
        this.showStep = 4;
        let that = this;
        this.taskService.executeTask(this.savedTask.id).subscribe(
          () => {
            that.setActiveQueue(this.savedTask.id);
            that.wsConnect(this.savedTask.id);
            this.toasterService.success('Counter task successfully executed', 'SUCCESS');
          }, (err) => {
            this.toasterService.error('Counter task cannot be executed', 'ERROR');
          }
        );
        break;
      }
      case 5: {
        this.stepTittle = 'Summary (4/4)';
        this.showStep = 5;
        break;
      }
    }
  }

  cancelTaskExec() {
    let that = this;
    this.taskService.cancelTask(this.savedTask.id).subscribe(
      () => {
        this.toasterService.success('Counter task successfully canceled', 'SUCCESS');
        that.setActiveQueue("all");
        this.router.navigate(['']);
      }, (err) => {
        this.toasterService.error('Counter task cannot be canceled', 'ERROR');
      }
    );
  }

  isLessThan(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          return;
      }
      if (control.value >= matchingControl.value) {
          matchingControl.setErrors({ isLessThan: true });
      } else {
          matchingControl.setErrors(null);
      }
    }
  }

  ngOnInit() {
    this.createForm = this.fb.group({
      xValue: ['', [Validators.required, Validators.min(0)]],
      yValue: ['', Validators.required]
  }, {
      validator: this.isLessThan('xValue', 'yValue')
  });
  }

  getXErrorMessage() {
    return this.createForm.controls.xValue.hasError('required') ? 'Required field!' :
    this.createForm.controls.xValue.hasError('min') ? 'Pick a positif value!' :
    '';
  }
  getYErrorMessage() {
    return this.createForm.controls.yValue.hasError('required') ? 'Required field' :
    this.createForm.controls.yValue.hasError('isLessThan') ? 'Y should be greater than X' :
    '';
  }
}
