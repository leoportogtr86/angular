import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturandoEventosComponent } from './capturando-eventos.component';

describe('CapturandoEventosComponent', () => {
  let component: CapturandoEventosComponent;
  let fixture: ComponentFixture<CapturandoEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapturandoEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturandoEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
