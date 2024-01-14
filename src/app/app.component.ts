import { Component ,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RightMenuBarComponent } from './components/rightMenuBar/right-menu-bar/right-menu-bar.component';
import { TaskService } from './services/task.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent,RightMenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  title = 'my-first-project';
  constructor(private taskService:TaskService){

  }
  editingData:object = {}
  menuBarIsOpen: boolean = false;
 ngOnInit(): void {
  this.taskService.menuBarIsOpen$.subscribe((isOpen) => {
    this.menuBarIsOpen = isOpen;
  });
  this.taskService.editingData$.subscribe((data)=>{
    this.editingData = data
  })
 }
}
