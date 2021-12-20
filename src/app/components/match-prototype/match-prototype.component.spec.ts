import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchPrototypeComponent } from './match-prototype.component';

describe('MatchPrototypeComponent', () => {
  let component: MatchPrototypeComponent;
  let fixture: ComponentFixture<MatchPrototypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchPrototypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchPrototypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
