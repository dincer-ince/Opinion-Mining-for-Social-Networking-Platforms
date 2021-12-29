import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogerComponent } from './loger.component';

describe('LogerComponent', () => {
  let component: LogerComponent;
  let fixture: ComponentFixture<LogerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
