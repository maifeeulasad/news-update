import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsElementComponent } from './news-element.component';

describe('NewsElementComponent', () => {
  let component: NewsElementComponent;
  let fixture: ComponentFixture<NewsElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
