import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmPsicologosComponent } from './frm-psicologos.component';

describe('FrmPsicologosComponent', () => {
  let component: FrmPsicologosComponent;
  let fixture: ComponentFixture<FrmPsicologosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrmPsicologosComponent]
    });
    fixture = TestBed.createComponent(FrmPsicologosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
