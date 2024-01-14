import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDayComponent } from './components/my-day/my-day.component';
import { ImportantComponent } from './components/important/important.component';
import { PlannedComponent } from './components/planned/planned.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
  { path: '', component: MyDayComponent },
  { path: 'important', component: ImportantComponent },
  { path: 'planned', component: PlannedComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'search', component: SearchComponent },
];

// Add RouterModule to your imports array
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

