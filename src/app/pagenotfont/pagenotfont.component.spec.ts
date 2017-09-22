import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotfontComponent } from './pagenotfont.component';

describe('PagenotfontComponent', () => {
  let component: PagenotfontComponent;
  let fixture: ComponentFixture<PagenotfontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagenotfontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenotfontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
