import { Component,OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { TodoTableComponent } from '../todo-list/todo-table/todo-table.component';
import { AddTaskInputComponent } from '../todo-list/addTaskInput/add-task-input/add-task-input.component';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { getCurrentDate } from './../../helpers/helperFuncs';

@Component({
  selector: 'app-my-day',
  standalone: true,
  imports: [TodoTableComponent,CommonModule,AddTaskInputComponent],
  templateUrl: './my-day.component.html',
  styleUrl: './my-day.component.css'
})

export class MyDayComponent implements OnInit {
  tableData:any=[];
  completedArray=[];
  page="myDay";
  getCurrentDate = getCurrentDate;
  constructor(private uiService:UiService,private taskService:TaskService){};
  ngOnInit(): void {
    this.loadData();

    // Subscribe to data changes
    this.taskService.getDataChanges().subscribe(() => {
      this.loadData();
    });

  }
  loadData(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tableData = data.filter((item:any)=> item.type == "myDay" || item.date ==  getCurrentDate('short'));
      this.completedArray = this.tableData.filter((item:any)=>item.completed.boolean == true);
    });
  }
  setMediaMenuIsOpen(){
    this.uiService.toggleMediaMenu()

  }
}
