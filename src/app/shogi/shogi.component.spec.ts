import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShogiComponent } from './shogi.component';

describe('ShogiComponent', () => {
  let component: ShogiComponent;
  let fixture: ComponentFixture<ShogiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShogiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShogiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
