import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsividadeComponent } from './responsividade.component';

describe('ResponsividadeComponent', () => {
  let component: ResponsividadeComponent;
  let fixture: ComponentFixture<ResponsividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsividadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
