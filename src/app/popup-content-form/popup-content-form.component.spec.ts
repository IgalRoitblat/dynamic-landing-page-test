import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupContentFormComponent } from './popup-content-form.component';

describe('PopupContentFormComponent', () => {
  let component: PopupContentFormComponent;
  let fixture: ComponentFixture<PopupContentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupContentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupContentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
