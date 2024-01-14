import { NgModule,ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { HttpClientModule  } from '@angular/common/http';
import { UiService } from './services/ui.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { AddTaskInputComponent } from './components/todo-list/addTaskInput/add-task-input/add-task-input.component';
library.add(faHome);

@NgModule({
  declarations:[],  
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers:[UiService],
  bootstrap: []
})
export class AppModule {
  constructor(private appRef: ApplicationRef) {}

  ngDoBootstrap() {
    const rootComponent = this.appRef.bootstrap(AppComponent);
    // You can perform additional logic here if needed
  }
}