import { Component,OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { TodoTableComponent } from '../todo-list/todo-table/todo-table.component';
import { AddTaskInputComponent } from '../todo-list/addTaskInput/add-task-input/add-task-input.component';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { getCurrentDate } from './../../helpers/helperFuncs';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TodoTableComponent,
    CommonModule,
    AddTaskInputComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{
  tableData:any=[];
  completedArray=[];
  page="tasks";
  getCurrentDate = getCurrentDate;
  constructor(private uiService:UiService,private taskService:TaskService){};

  ngOnInit(): void {
    this.loadData();
    this.taskService.getDataChanges().subscribe(() => {
      this.loadData();
    });
  }

  loadData(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tableData = data;
      this.completedArray = this.tableData.filter((item:any)=>item.completed.boolean);
    });
  }

  setMediaMenuIsOpen(){
    this.uiService.toggleMediaMenu()

  }
}
