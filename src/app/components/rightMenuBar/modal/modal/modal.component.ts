import { Component,Input } from '@angular/core';
import { TaskService } from '../../../../services/task.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input()item:any;
  constructor(private taskServise:TaskService){

  }

  deleteItem():void{
    this.taskServise.deleteTask(this.item.id).subscribe(deletedItem => {
      this.taskServise.notifyDataChanges(deletedItem)
      this.taskServise.setDeleteModalIsOpen();
      this.taskServise.setMenuBarIsOpen();
    })
  }
  closeModal(){
    this.taskServise.setDeleteModalIsOpen();
  }
}
