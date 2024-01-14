import { Component,Input,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../../services/task.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-base-completer-input',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './base-completer-input.component.html',
  styleUrl: './base-completer-input.component.css'
})
export class BaseCompleterInputComponent implements OnInit{
  @Input() item:any;


  constructor(private taskService:TaskService){
  }
   ngOnInit() {

      }
  onCheckboxChange(): void {
    this.taskService.updateTask(this.item.id,{
      ...this.item,
      completed: {
        boolean: !this.item.completed.boolean,
      },
    }).subscribe(updatedItem => {
      this.taskService.notifyDataChanges(updatedItem);
      this.taskService.setMenuBarData(updatedItem);
    });
  }
}
