import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertDetailComponent } from './ofert-detail.component';

describe('OfertDetailComponent', () => {
  let component: OfertDetailComponent;
  let fixture: ComponentFixture<OfertDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
