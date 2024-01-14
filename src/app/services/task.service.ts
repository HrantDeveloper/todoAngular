import { Injectable } from '@angular/core';
import { Observable,of,Subject } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { PostedItemDataType, itemDataType } from '../basics';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  private dataSubject = new Subject<any>();
   _menuBarIsOpen = new BehaviorSubject<boolean>(false);
  menuBarIsOpen$ = this._menuBarIsOpen.asObservable();

  _deleteModalIsOpen = new BehaviorSubject<boolean>(false);
  deleteModalIsOpen$ = this._deleteModalIsOpen.asObservable();

   _editingData = new BehaviorSubject<object>({});
  editingData$ = this._editingData.asObservable();

  _searchedData = new BehaviorSubject<any>([]);
  searchedData$ = this._searchedData.asObservable();

  constructor(private http:HttpClient) { }

  getTasks():Observable<any>{
     return this.http.get<itemDataType[]>(this.apiUrl);
  }
  addTasks(task:PostedItemDataType):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post<PostedItemDataType>(this.apiUrl, task,httpOptions);
  }
  updateTask(taskId: string, taskData: any): Observable<any> {
    const url = `${this.apiUrl}/${taskId}`;
    return this.http.put(url, taskData);
  }
  deleteTask(taskId:string):Observable<any>{
    const url = `${this.apiUrl}/${taskId}`;
    return this.http.delete(url);
  }
  setMenuBarIsOpen(): void {
    this._menuBarIsOpen.next(!this._menuBarIsOpen.value);
  }
  setMenuBarData(data:any): void{
    this._editingData.next(data);
    console.log(this._menuBarIsOpen.value);
  }
  setDeleteModalIsOpen(){
    this._deleteModalIsOpen.next(!this._deleteModalIsOpen.value);
  }
  setSearchedData(data:any): void{
    this._searchedData.next(data);
    console.log(this._searchedData)

  }
  notifyDataChanges(data:any): void {
    this.dataSubject.next(data);
  }

  getDataChanges(): Observable<any> {
    return this.dataSubject.asObservable();
  }
}
