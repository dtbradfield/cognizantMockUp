import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopmostComponent } from './topmost.component';

describe('TopmostComponent', () => {
  let component: TopmostComponent;
  let fixture: ComponentFixture<TopmostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopmostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopmostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
