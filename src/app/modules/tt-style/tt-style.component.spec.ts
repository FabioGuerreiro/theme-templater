import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TtStyleComponent } from './tt-style.component';

describe('TtStyleComponent', () => {
  let component: TtStyleComponent;
  let fixture: ComponentFixture<TtStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
