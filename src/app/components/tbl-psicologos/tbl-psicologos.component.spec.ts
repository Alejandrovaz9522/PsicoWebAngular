import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblPsicologosComponent } from './tbl-psicologos.component';

describe('TblPsicologosComponent', () => {
  let component: TblPsicologosComponent;
  let fixture: ComponentFixture<TblPsicologosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TblPsicologosComponent]
    });
    fixture = TestBed.createComponent(TblPsicologosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
