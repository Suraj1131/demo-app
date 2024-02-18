import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingcomponenComponent } from './routingcomponen.component';

describe('RoutingcomponenComponent', () => {
  let component: RoutingcomponenComponent;
  let fixture: ComponentFixture<RoutingcomponenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingcomponenComponent]
    });
    fixture = TestBed.createComponent(RoutingcomponenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
