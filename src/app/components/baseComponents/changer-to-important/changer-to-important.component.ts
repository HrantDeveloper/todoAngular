import { Component ,Input} from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-changer-to-important',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './changer-to-important.component.html',
  styleUrl: './changer-to-important.component.css'
})
export class ChangerToImportantComponent {
  @Input() item:any;
  faStar = faStar;
  constructor(private taskService:TaskService){}

  onImportancyChange(): void {
    this.taskService.updateTask(this.item.id,{
      ...this.item,
      important:!this.item.important
    }).subscribe(updatedItem => {
      this.taskService.notifyDataChanges(updatedItem)
      this.taskService.setMenuBarData(updatedItem);
    });
  }

}
