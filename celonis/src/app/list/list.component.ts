import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {DeleteDialogComponent} from '../dialogs/delete/delete.dialog.component';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { ToastrService } from 'ngx-toastr';
import * as Stomp from 'stompjs';

@Component({
  selector: 'app-list.component',
  templateUrl: '../list/list.component.html',
  styleUrls: ['../list/list.component.css']
})

export class ListComponent implements OnInit {
  wsData: any;
  storedObj: any;

  constructor(public dialog: MatDialog,
              public httpClient: HttpClient,
              public taskService: TaskService,
              private router: Router,
              private toasterService: ToastrService) {
    this.wsConnect();
    this.filteredLS();
  }

  ngOnInit() {
    this.loadData();
  }

  wsConnect() {
    let socket = new WebSocket("ws://localhost:8080/ws");
    let ws = Stomp.over(socket);
    let that = this;
    ws.connect({}, () => {
      ws.subscribe("/topic/notify", (message:any) => {
        that.wsData = JSON.parse(message.body);
      });
    }, function(error) {
      alert("STOMP error " + error);
    });
  }

  public loadData() {
    this.taskService.getTaskList().subscribe(data => {
      this.wsData = data;
    }, (error) => {
      console.log (error.name + ' ' + error.message);
      this.toasterService.error('Please contact your admin. Error while loading Task list', 'ERROR');
    });
  }

  filteredLS() {
    let filteredObj = '[';
    Object.keys(localStorage).filter(function (key) {
        return key.includes('toBeStored');
    }).map(function (key) {
      filteredObj += localStorage.getItem(key) + ',';
    });

    if (filteredObj.length > 2) {
      this.storedObj =  JSON.parse(filteredObj.substr(0, filteredObj.length -1) + ']');
    } else{
      this.storedObj =  [];
    }
  }

  getKey(row) {
    let filteredObj = Object.keys(localStorage).find(function (key) {
        return ((localStorage.getItem(key).includes(JSON.stringify(row)) && key.includes('toBeStored')));
    });
    console.log(filteredObj);
    return filteredObj;
  }

  addNew(): void {
    this.router.navigate(['/add']);
  }

  startEdit(row) {
    if (row.status != 'Canceled') {
      this.router.navigate(['/edit/' + row.id]);
    } else {
      this.toasterService.info('You cannot edit a canceled task!', 'INFO');
    }
  }

  startConfigure(row) {
    console.log(row);
    this.addNew();
    localStorage.setItem('ToBeCreated', JSON.stringify(row));
    localStorage.removeItem(this.getKey(row));
  }

  deleteItem(row) {
    console.log(row);
    if (row.status != 'Not configured') {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        data: {id: row.id, name: row.name, creationDate: row.creationDate, x: row.x, y: row.y, isExecuted: row.isExecuted}
      });

      dialogRef.afterClosed().subscribe(result => {
        this.taskService.deleteTask(row.id).subscribe(
          () => {
            this.toasterService.success('Task deleted successfuly', 'SUCCESS');
            this.loadData();
          }, () => {
            this.toasterService.error('Please contact your admin. Error while deleting Task', 'ERROR');
          }
        )
      });
    } else {
      localStorage.removeItem(this.getKey(row));
      this.filteredLS();
      this.toasterService.success('Task deleted successfuly from localStorage!', 'SUCCESS');
    }
  }

  cancelItem(row) {
    this.taskService.cancelTask(row.id).subscribe(
      () => {
        this.toasterService.success('Counter task successfully canceled', 'SUCCESS');
        this.loadData();
      }, (err) => {
        this.toasterService.error('Counter task cannot be canceled', 'ERROR');
      }
    );
  }
}
