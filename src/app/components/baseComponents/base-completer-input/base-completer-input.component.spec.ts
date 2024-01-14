import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCompleterInputComponent } from './base-completer-input.component';

describe('BaseCompleterInputComponent', () => {
  let component: BaseCompleterInputComponent;
  let fixture: ComponentFixture<BaseCompleterInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseCompleterInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaseCompleterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
