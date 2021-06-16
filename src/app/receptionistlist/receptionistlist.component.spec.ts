import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistlistComponent } from './receptionistlist.component';

describe('ReceptionistlistComponent', () => {
  let component: ReceptionistlistComponent;
  let fixture: ComponentFixture<ReceptionistlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionistlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
