import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitpropertyComponent } from './submitproperty.component';

describe('SubmitpropertyComponent', () => {
  let component: SubmitpropertyComponent;
  let fixture: ComponentFixture<SubmitpropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitpropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
