import { Component,Input } from '@angular/core';
import { getCurrentDate, getNextWeekDate, getTomorrowsDate } from '../../../helpers/helperFuncs';
import { TaskService } from '../../../services/task.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { dateChangerTypesData } from '../../../config';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-date-changer',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule,FormsModule],
  templateUrl: './date-changer.component.html',
  styleUrl: './date-changer.component.css'
})
export class DateChangerComponent {
  @Input()item:any;
  @Input()func:any;
  faClose = faClose;
  calendarDate = ""
  dateChangerTypesData = dateChangerTypesData
  today = getCurrentDate("short");
  tomorrow = getTomorrowsDate();
  nextWeek = getNextWeekDate();
  dateChangerMenuIsOpen:boolean = false;
  calendarIsOpen:boolean =false;
  constructor(private taskServise:TaskService){

  }

  toggleDateChangerMenu(){
    this.dateChangerMenuIsOpen = !this.dateChangerMenuIsOpen;
  }
  dateChangerChooser = (dateChangerType:number) => {
    if (dateChangerType == 1) {
      this.taskServise.updateTask(this.item.id, {
        ...this.item,
        date: this.today,
      }).subscribe(updatedItem => {
        this.taskServise.notifyDataChanges(updatedItem);
        this.taskServise.setMenuBarData(updatedItem);
      });;
    } else if (dateChangerType == 2) {
      this.taskServise.updateTask(this.item.id, {
        ...this.item,
        date: this.tomorrow,
      }).subscribe(updatedItem => {
        this.taskServise.notifyDataChanges(updatedItem);
        this.taskServise.setMenuBarData(updatedItem);
      });;
    } else if (dateChangerType == 3) {
      this.taskServise.updateTask(this.item.id, {
        ...this.item,
        date: this.nextWeek,
      }).subscribe(updatedItem => {
        this.taskServise.notifyDataChanges(updatedItem);
        this.taskServise.setMenuBarData(updatedItem);
      });;
    }
    else {
      if(!this.calendarDate){
        this.calendarIsOpen = !this.calendarIsOpen;

      }else{
        this.dateChangerMenuIsOpen = !this.dateChangerMenuIsOpen;
        this.taskServise.updateTask(this.item.id, {
          ...this.item,
          date: this.calendarDate,
        }).subscribe(updatedItem => {
          this.taskServise.notifyDataChanges(updatedItem);
          this.taskServise.setMenuBarData(updatedItem);
          this.calendarIsOpen = !this.calendarIsOpen;
        });
      }
    }
    this.dateChangerMenuIsOpen = !this.dateChangerMenuIsOpen;
  };

}
