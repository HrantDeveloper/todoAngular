import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoLisItemComponent } from './todo-lis-item.component';

describe('TodoLisItemComponent', () => {
  let component: TodoLisItemComponent;
  let fixture: ComponentFixture<TodoLisItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoLisItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoLisItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
