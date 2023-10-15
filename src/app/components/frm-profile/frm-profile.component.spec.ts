import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmProfileComponent } from './frm-profile.component';

describe('FrmProfileComponent', () => {
  let component: FrmProfileComponent;
  let fixture: ComponentFixture<FrmProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrmProfileComponent]
    });
    fixture = TestBed.createComponent(FrmProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
