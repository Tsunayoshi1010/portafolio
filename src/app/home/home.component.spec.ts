import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [HomeComponent]
    })
    .compileComponents();

=======
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
>>>>>>> fbc143d2a32c23d79717db42ec31c4af450ea7d3
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
