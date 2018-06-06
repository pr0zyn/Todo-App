import { Component } from '@angular/core';
import { Task } from './task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task;
  jobs = [];

  constructor(){ 
    this.task =  new Task();  
    this.task.text = "Task number";
    this.task.num = 0;
    this.jobs = JSON.parse(localStorage.getItem('jobs'));
    if (this.jobs == null) {
        this.jobs = [];
        localStorage.setItem('jobs',JSON.stringify(this.jobs));
    }   
  }
  add() { 
    if (this.jobs.length > 0) {
      this.task.num = this.jobs.length;
      this.task.num++;
      this.jobs = JSON.parse(localStorage.getItem('jobs'));
      this.jobs.push(this.task);

      localStorage.setItem('jobs', JSON.stringify(this.jobs));
    
    }else{
      this.task.num++;
      this.jobs = JSON.parse(localStorage.getItem('jobs'));
      this.jobs.push(this.task);

      localStorage.setItem('jobs', JSON.stringify(this.jobs));
    }  
  }

  remove() {
    this.jobs.pop()
    if (this.task.num > 0) {
      this.task.num--
    }  
    localStorage.setItem('jobs', JSON.stringify(this.jobs));
  }

  clear() { 
    localStorage.clear();
    this.jobs = [];
    localStorage.setItem('jobs', JSON.stringify(this.jobs));
    this.task.num = 0;
  }
}
