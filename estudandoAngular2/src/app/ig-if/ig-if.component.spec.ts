/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IgIfComponent } from './ig-if.component';

describe('IgIfComponent', () => {
  let component: IgIfComponent;
  let fixture: ComponentFixture<IgIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
