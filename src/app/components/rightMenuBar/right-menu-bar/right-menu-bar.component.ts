import { Component,Input,OnInit } from '@angular/core';
import { BaseCompleterInputComponent } from '../../baseComponents/base-completer-input/base-completer-input.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../../../services/task.service';
import { ChangerToImportantComponent } from '../../baseComponents/changer-to-important/changer-to-important.component';
import { DateChangerComponent } from '../date-changer/date-changer.component';
import { itemDataType } from '../../../basics';
import { ModalComponent } from '../modal/modal/modal.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-right-menu-bar',
  standalone: true,
  imports: [
    BaseCompleterInputComponent,
    FormsModule,
    FontAwesomeModule,
    ChangerToImportantComponent,
    DateChangerComponent,
    ModalComponent,
    CommonModule],
  templateUrl: './right-menu-bar.component.html',
  styleUrl: './right-menu-bar.component.css'
})
export class RightMenuBarComponent implements OnInit {
  @Input() item:any;
  updatedName:string = "";
  deleteModal:boolean = false;
  faClose = faClose;
  faTrash = faTrash;
  constructor(private taskService:TaskService){}

  ngOnInit(): void {
   this.taskService.deleteModalIsOpen$.subscribe((isOpen) => {
     this.deleteModal = isOpen;
   });
  }
  closeMenuBar(){
    this.taskService.setMenuBarIsOpen()
  }
  setModalIsOpen(){
    this.taskService.setDeleteModalIsOpen();
  }

  updateItem = async (newData:any, whatIsChanged:string) => {
    if (whatIsChanged == "title") {
      if (this.updatedName) {
        this.taskService.updateTask(this.item.id, {
          ...this.item,
          name:this.updatedName
        }).subscribe(updatedItem => {
          this.taskService.notifyDataChanges(updatedItem);
          this.taskService.setMenuBarData(updatedItem);
        });
      } else {
        return;
      }
    }else if (whatIsChanged == "dateDeleter"){
      this.taskService.updateTask(this.item.id, {
        ...this.item,
        date:newData
      }).subscribe(updatedItem => {
        this.taskService.notifyDataChanges(updatedItem);
        this.taskService.setMenuBarData(updatedItem);
      });
    }
    try {

    } catch (err) {
      return;
    }
  };

}
