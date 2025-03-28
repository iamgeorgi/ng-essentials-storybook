import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { Task } from '../task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() userId!: string;
  @Input() name!: string;
  taskCompletedId!: string;
  initNewTaskCreation = false;

  constructor(private tasksService: TasksService) {}

  get selecteUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  showNewTask(taskHandling: boolean) {
    this.initNewTaskCreation = taskHandling;
  }
}
