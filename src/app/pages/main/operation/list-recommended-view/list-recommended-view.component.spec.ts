import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecommendedViewComponent } from './list-recommended-view.component';

describe('ListRecommendedViewComponent', () => {
  let component: ListRecommendedViewComponent;
  let fixture: ComponentFixture<ListRecommendedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRecommendedViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListRecommendedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
