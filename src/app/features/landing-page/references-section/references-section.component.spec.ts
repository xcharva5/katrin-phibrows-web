import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesSectionComponent } from './references-section.component';

describe('GallerySectionComponent', () => {
  let component: ReferencesSectionComponent;
  let fixture: ComponentFixture<ReferencesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferencesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferencesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
