import { Component,Input,OnInit } from '@angular/core';
import { itemDataType } from '../../../../basics';
import { CommonModule } from '@angular/common';
import { getCurrentDate } from '../../../../helpers/helperFuncs';
import { BaseCompleterInputComponent } from '../../../baseComponents/base-completer-input/base-completer-input.component';
import { ChangerToImportantComponent } from '../../../baseComponents/changer-to-important/changer-to-important.component';
import { TaskService } from '../../../../services/task.service';
@Component({
  selector: 'app-todo-lis-item',
  standalone: true,
  imports: [CommonModule,BaseCompleterInputComponent,ChangerToImportantComponent],
  templateUrl: './todo-lis-item.component.html',
  styleUrl: './todo-lis-item.component.css'
})
export class TodoLisItemComponent implements OnInit {
   date:string = getCurrentDate("short");
  @Input() item:any;
  constructor(private taskService:TaskService){}
  ngOnInit(): void {}
  openEditingMenu(itemData:any){
   this.taskService.setMenuBarIsOpen()
   this.taskService.setMenuBarData(itemData)
  }
}
