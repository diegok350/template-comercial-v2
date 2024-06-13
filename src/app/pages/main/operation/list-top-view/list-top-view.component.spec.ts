import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTopViewComponent } from './list-top-view.component';

describe('ListTopViewComponent', () => {
  let component: ListTopViewComponent;
  let fixture: ComponentFixture<ListTopViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTopViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListTopViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
