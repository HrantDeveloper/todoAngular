import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerToImportantComponent } from './changer-to-important.component';

describe('ChangerToImportantComponent', () => {
  let component: ChangerToImportantComponent;
  let fixture: ComponentFixture<ChangerToImportantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangerToImportantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangerToImportantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
