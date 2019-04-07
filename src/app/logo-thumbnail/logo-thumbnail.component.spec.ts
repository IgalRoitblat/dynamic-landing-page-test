import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoThumbnailComponent } from './logo-thumbnail.component';

describe('LogoThumbnailComponent', () => {
  let component: LogoThumbnailComponent;
  let fixture: ComponentFixture<LogoThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
