import { Component,OnInit,Input } from '@angular/core';
import { itemDataType } from '../../../basics';
import { CommonModule, NgFor } from '@angular/common';
import { TodoLisItemComponent } from './todo-lis-item/todo-lis-item.component';
import { UiService } from '../../../services/ui.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-todo-table',
  standalone: true,
  imports: [CommonModule,TodoLisItemComponent,FontAwesomeModule],
  templateUrl: './todo-table.component.html',
  styleUrl: './todo-table.component.css'
})
export class TodoTableComponent implements OnInit {
  faArrowRight = faArrowRight;
  faArrowDown = faArrowDown; 
  completedData: any[] = [];
  // completedIsOpen = this.uiService.completedIsOpen;
  completedIsOpen = true;
  @Input()inputData:itemDataType[]=[];
  @Input()completedDataa=[];
  constructor(private uiService:UiService){};
  ngOnInit(): void {
  }
  setCompletedIsOpen(){
    // this.uiService.toggleCompletedIsOpen();
    this.completedIsOpen = !this.completedIsOpen
  }
 
 
}
