import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHighlightComponent } from './service-highlight.component';

describe('ServiceHighlightComponent', () => {
  let component: ServiceHighlightComponent;
  let fixture: ComponentFixture<ServiceHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceHighlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
