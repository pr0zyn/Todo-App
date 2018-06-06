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
  public add() { 
    if (this.jobs.length > 0) {
      this.task.num = this.jobs.length;
      this.task.num++;
      this.jobs = JSON.parse(localStorage.getItem('jobs'));
      this.task.color = this.random();
      this.jobs.push(this.task);
      localStorage.setItem('jobs', JSON.stringify(this.jobs));
    
    }else{
      this.task.num++;
      this.jobs = JSON.parse(localStorage.getItem('jobs'));
      this.task.color = this.random();
      this.jobs.push(this.task);
      localStorage.setItem('jobs', JSON.stringify(this.jobs));
    }  
  }

  public remove() {
    this.jobs.pop()
    if (this.task.num > 0) {
      this.task.num--
    }  
    localStorage.setItem('jobs', JSON.stringify(this.jobs));
  }

  public clear() { 
    localStorage.clear();
    this.jobs = [];
    localStorage.setItem('jobs', JSON.stringify(this.jobs));
    this.task.num = 0;
  }

  public random() {
    let rgb = [];
    for (let i = 1; i <= 3;i++) {
      let x = Math.floor(Math.random() * (255 - 80) + 80);
       rgb.push(x);
     }
    let color ='rgb('+rgb.toString()+')';
    return color;
   }
}
