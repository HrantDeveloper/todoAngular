import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightMenuBarComponent } from './right-menu-bar.component';

describe('RightMenuBarComponent', () => {
  let component: RightMenuBarComponent;
  let fixture: ComponentFixture<RightMenuBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightMenuBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
