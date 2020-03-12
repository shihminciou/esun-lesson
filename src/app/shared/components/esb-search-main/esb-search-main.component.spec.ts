import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsbSearchMainComponent } from './esb-search-main.component';

describe('EsbSearchMainComponent', () => {
  let component: EsbSearchMainComponent;
  let fixture: ComponentFixture<EsbSearchMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsbSearchMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsbSearchMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
