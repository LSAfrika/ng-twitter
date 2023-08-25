import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedChooseComponent } from './verified-choose.component';

describe('VerifiedChooseComponent', () => {
  let component: VerifiedChooseComponent;
  let fixture: ComponentFixture<VerifiedChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiedChooseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifiedChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
