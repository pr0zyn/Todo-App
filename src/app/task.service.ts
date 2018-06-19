import { Task } from './task';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {

  private todos: Task[];
  private id: number = 0;
  private check = false;

  
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('jobs'));
    if (this.todos === null) {
      this.todos = [];
      localStorage.setItem('jobs',JSON.stringify(this.todos));
    }
  }
  
  public addTodo(title: string, content: string, color: string) { 
    
    this.newId(this.todos.length);
    this.id++;   
    let job = new Task(this.id, title, content, this.check, color);
    this.todos.push(job);
    localStorage.setItem('jobs', JSON.stringify(this.todos));
    return job;  
  }

  public getTodos(): void {
    let todos = JSON.parse(localStorage.getItem('jobs'));
    return todos;
  }

  public clear(): void { 
    localStorage.clear();
    this.todos = [];
    localStorage.setItem('jobs', JSON.stringify(this.todos));
    this.id = 0;
  }

  public remove(id: number): void {
    this.todos = this.todos.filter(todo => { return todo.id !== id; });
    this.newId(id);
    localStorage.setItem('jobs', JSON.stringify(this.todos));
    return this.getTodos();
  }

  private newId(id:number) { 
    if (this.todos.length > 0) {
      this.id = Math.floor(Math.random() * (300 - id) + id);
    }
  }
  

}
