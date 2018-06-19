import { TaskService } from './task.service';
import { Component, NgModule, OnInit } from '@angular/core';
import { Task } from './task';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public todos;
    public title: string;
    public content: string;
  constructor(private taskService: TaskService) {}

    ngOnInit() {
        this.todos = this.taskService.getTodos();
        this.title = "",
        this.content = ""
    }

    public onSubmit(form: NgForm) { 
        this.todos.push(this.taskService.addTodo(this.title, this.content, this.randomColor()));
        form.form.reset();
    }
  
    public clear() { 
        this.taskService.clear();
        this.todos = [];
    }

    public remove(id: number) { 
      this.todos = this.taskService.remove(id);
    }

    public randomColor() {
        let rgb = [];
        for (let i = 1; i <= 3;i++) {
        let x = Math.floor(Math.random() * (255 - 80) + 80);
            rgb.push(x);
        }
        let color ='rgb('+rgb.toString()+')';
        return color;
   }
}