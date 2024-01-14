import { Component,Input, OnInit,Output,EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { PostedItemDataType } from '../../../../basics';
import { TaskService } from '../../../../services/task.service';
@Component({
  selector: 'app-add-task-input',
  standalone: true,
  imports: [FontAwesomeModule,FormsModule],
  templateUrl: './add-task-input.component.html',
  styleUrl: './add-task-input.component.css'
})
export class AddTaskInputComponent implements OnInit{
  faPlus= faPlus;
  // @Output() onAddTask:EventEmitter<PostedItemDataType> = new EventEmitter();
  @Input()page = "";
  name:string ="";
  date:string="";
  constructor(private taskService:TaskService){};
  ngOnInit(): void {
  }

  onSubmit() {
    if(this.name){
      const newTask ={
          id:Math.floor(Math.random()*1000),
           completed:{
             boolean:false,
             date:""
           },
           date:this.date?this.date:"",
           important:this.page =="important"?true:false,
           name:this.name,
           type:this.page
          }
      // this.onAddTask.emit(newTask);
      this.taskService.addTasks(newTask).subscribe(
        (response) => {
          console.log('Task added successfully:', response);
          this.taskService.notifyDataChanges(newTask)
        },
        (error) => {
          console.error('Error adding task:', error);
        }
      );
      this.name = "";
    }else{
      return
    }
   ;
  }

}
