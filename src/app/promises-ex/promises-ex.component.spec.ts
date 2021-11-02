import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisesExComponent } from './promises-ex.component';

describe('PromisesExComponent', () => {
  let component: PromisesExComponent;
  let fixture: ComponentFixture<PromisesExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromisesExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromisesExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
