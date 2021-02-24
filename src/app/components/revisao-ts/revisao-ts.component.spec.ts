import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisaoTsComponent } from './revisao-ts.component';

describe('RevisaoTsComponent', () => {
  let component: RevisaoTsComponent;
  let fixture: ComponentFixture<RevisaoTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisaoTsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisaoTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
