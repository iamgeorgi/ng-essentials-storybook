import { Component, EventEmitter, inject, Input, OnChanges, Output, signal, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input() userId!: string;
  @Output() closeModal = new EventEmitter<void>();
  @Output() create = new EventEmitter<Task>(); 
  private tasksService = inject(TasksService);

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = signal('');

  onModalClose() {
    this.closeModal.emit();
  }

  onSubmit() {
    this.tasksService.createTask({
      id: this.userId,
      userId: this.userId,
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate(),
    })
    this.closeModal.emit();
  }
}
