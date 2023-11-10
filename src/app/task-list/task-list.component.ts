import { Component } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Task[] = [];
  newTaskTitle: string = '';

  addTask() {
    if (this.newTaskTitle.trim() !== '') {
      const newId = this.tasks.length + 1;
      const newTask = new Task(newId, this.newTaskTitle.trim());
      this.tasks.push(newTask);
      this.newTaskTitle = '';
    }
  }

  deleteTask(id: number): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    }
  }
  

  editTask(task: Task): void {
    task.editing = !task.editing;
  }
  
  updateTask(task: Task, newTitle: string): void {
    if (newTitle.trim() !== '') {
      task.title = newTitle.trim();
      task.editing = false;
    }
  }
  
}
