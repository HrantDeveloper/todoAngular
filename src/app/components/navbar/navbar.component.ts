import { Component, OnInit } from '@angular/core';
import { navBarData } from '../../config';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit {
  navBarData =  navBarData;
  tableData = [];
  showMobileMenu:boolean = false;
  isActive = window.localStorage.getItem("isAcvtiveId");
  // showMediaMenu:boolean =true;
  subsctiption:any = Subscription;
  constructor(
    private uiService:UiService,private router: Router,
    private taskService:TaskService){};
    ngOnInit(): void {
      this.uiService.showMobileMenu$.subscribe((isOpen) => {
        this.showMobileMenu = isOpen;
        console.log(this.showMobileMenu)
      });
    }
  setMobileMenuIsOpen(){
    this.uiService.toggleMediaMenu()
  }
  changeIsActive(id:string,title:string){
    if (typeof window !== "undefined") {
      window.localStorage.setItem("isAcvtiveId", id);
      this.isActive = window.localStorage.getItem("isAcvtiveId");
      if(id=="myDay"){
        this.router.navigate(['/']);
      }
    } else {
      return;
    }
  }
  navigateToSearch() {
    // Use the Router service to navigate to the 'home' route
    this.router.navigate(['/search']);
  }
  onInputChange(event: any) {
    if(event.target.value){
      this.taskService.getTasks().subscribe(
        (tasksArray) => {
          this.tableData = tasksArray.filter((item:any)=>item.name.includes(event.target.value));
          this.taskService.setSearchedData(this.tableData);
        },
        (error) => {
          console.error('Error fetching tasks:', error);
        }
      );
    }

  }
}
