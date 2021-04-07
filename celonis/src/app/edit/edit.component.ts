import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as Stomp from 'stompjs';

@Component({
  selector: 'app-edit.component',
  templateUrl: '../edit/edit.component.html',
  styleUrls: ['../edit/edit.component.css']
})
export class EditComponent {
  data = {name:'', creationDate:'', x:'', y:'', isExecuted:'', status: ''};
  taskId = this.route.snapshot.paramMap.get('id');
  stepTittle = 'Execute Task (3/4)';
  showStep:any;
  createForm: FormGroup;

  wsData: any = [];
  ws: any;
  savedTask:any;

  constructor(public taskService: TaskService,
              private router: Router,
              private route:ActivatedRoute,
              private fb: FormBuilder,
              private toasterService: ToastrService) {
    let socket = new WebSocket("ws://localhost:8080/ws");
    this.ws = Stomp.over(socket);
  }

  ngOnInit() {
    this.taskService.getTask(this.taskId).subscribe(
      (data) => {
        this.data = data;
        this.selectStepFromStatus(data.status);
      }
    )
    this.createForm = this.fb.group({
      xValue: ['', [Validators.required, Validators.min(0)]],
      yValue: ['', Validators.required]
  }, {
      validator: this.isLessThan('xValue', 'yValue')
  });
  }

  wsConnect(id) {
    let socket = new WebSocket("ws://localhost:8080/ws");
    this.ws = Stomp.over(socket);
    let that = this;
    this.ws.connect({}, () => {
      this.ws.subscribe("/topic/notify/" + id, (message:any) =>  {
        that.wsData = JSON.parse(message.body);
        if (that.wsData.x == that.wsData.y) {
          that.selectStepFromStatus('Finished');
        }
      });
    }, function(error) {
      alert("STOMP error " + error);
    });
  }

  selectStepFromStatus(status: String) {
    switch (status) {
      case 'Not Configured': {
        this.showStep = 2;
        this.stepTittle = 'Configure Task (2/4)';
        break;
      }
      case 'Not Executed': {
        console.log('test 1');
        this.showStep = 3;
        this.stepTittle = 'Execute Task (3/4)';
        this.data.name = 'Counter';
        break;
      }
      case 'Executing': {
        console.log('test');
        this.showStep = 4;
        this.stepTittle = 'Execute Task (3/4)';
        this.setActiveQueue(this.taskId);
        this.wsConnect(this.taskId);
        break;
      }
      case 'Canceled': {}
      case 'Finished': {
        this.showStep = 5;
        this.stepTittle = 'Summary (4/4)';
        break;
      }
    }
  }

  goToList(){
    this.setActiveQueue("all");
    this.router.navigate(['']);
  }

  setActiveQueue(queue) {
    var data = JSON.stringify({
      'queue' : queue
    })
    this.ws.send("/app/message", {}, data);
    console.log('Active queue : ', queue);
  }

  createTask() {
    console.log('I am creating the task', this.data);
    this.taskService.createTask(this.data).subscribe(
      (result) => {
        this.savedTask = result;
        this.toasterService.success('Counter task successfully added', 'SUCCESS');
      }, (err) => {
        this.toasterService.error('Counter task cannot be added', 'ERROR');
      }
    );
  }

  executeTask() {
    console.log('I am executing the task');
    this.taskService.executeTask(this.taskId).subscribe(
      () => {
        this.toasterService.success('Counter task successfully executed', 'SUCCESS');
        this.selectStepFromStatus('Executing');
      }, (err) => {
        this.toasterService.error('Counter task cannot be executed', 'ERROR');
      }
    );
  }

  cancelTaskExec() {
    let that = this;
    this.taskService.cancelTask(this.taskId).subscribe(
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
