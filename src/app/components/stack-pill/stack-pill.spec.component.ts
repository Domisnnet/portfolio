import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackPill } from './stack-pill';

describe('StackPill', () => {
  let component: StackPill;
  let fixture: ComponentFixture<StackPill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackPill],
    }).compileComponents();

    fixture = TestBed.createComponent(StackPill);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
