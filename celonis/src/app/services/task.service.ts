import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private baseUrl = 'http://localhost:8080/api/counters';
    private HEADER_NAME = 'Celonis-Auth';
    private HEADER_VALUE = 'totally_secret';
    private headers = new HttpHeaders().set(this.HEADER_NAME, this.HEADER_VALUE);

    dataChange: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);

    get data(): Task[] {
      return this.dataChange.value;
    }

    constructor(private http: HttpClient) { }

    getTask(id: String): Observable<any> {
      return this.http.get(`${this.baseUrl}/${id}`, { headers: this.headers });
    }

    createTask(task: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl}/`, task, { headers: this.headers });
    }

    executeTask(id: String): Observable<Object> {
      return this.http.post(`${this.baseUrl}/${id}/execute`, { headers: this.headers });
    }

    cancelTask(id: String): Observable<Object> {
      return this.http.post(`${this.baseUrl}/${id}/cancel`, { headers: this.headers });
    }

    updateTask(id: String, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/${id}`, value, { headers: this.headers });
    }

    deleteTask(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`, { headers: this.headers });
    }

    getTaskList(): Observable<Object> {
      return this.http.get<Task[]>(`${this.baseUrl}/`, { headers: this.headers });
  }
}
