import { Component,OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { TodoTableComponent } from '../todo-list/todo-table/todo-table.component';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [TodoTableComponent,CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  tableData:any=[];
  completedArray=[];
  page="tasks";
  constructor(private uiService:UiService,private taskService:TaskService){};
  ngOnInit(): void {
    this.taskService.searchedData$.subscribe((data)=>{
      this.tableData = data
    })
    this.completedArray = this.tableData.filter((item:any)=>item.completed.boolean)
    console.log(this.tableData)
  }
  setMediaMenuIsOpen(){
    this.uiService.toggleMediaMenu()

  }
}
