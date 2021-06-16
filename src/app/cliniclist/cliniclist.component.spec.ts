import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliniclistComponent } from './cliniclist.component';

describe('CliniclistComponent', () => {
  let component: CliniclistComponent;
  let fixture: ComponentFixture<CliniclistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliniclistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CliniclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
