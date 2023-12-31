import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendtweetComponent } from './sendtweet.component';

describe('SendtweetComponent', () => {
  let component: SendtweetComponent;
  let fixture: ComponentFixture<SendtweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendtweetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendtweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
