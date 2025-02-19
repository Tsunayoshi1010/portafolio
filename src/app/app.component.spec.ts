import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
=======
import { RouterTestingModule } from '@angular/router/testing';
>>>>>>> fbc143d2a32c23d79717db42ec31c4af450ea7d3
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
<<<<<<< HEAD
        RouterModule.forRoot([])
=======
        RouterTestingModule
>>>>>>> fbc143d2a32c23d79717db42ec31c4af450ea7d3
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have as title 'HoverMunoz'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('HoverMunoz');
=======
  it(`should have as title 'portafolio'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('portafolio');
>>>>>>> fbc143d2a32c23d79717db42ec31c4af450ea7d3
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, HoverMunoz');
=======
    expect(compiled.querySelector('.content span')?.textContent).toContain('portafolio app is running!');
>>>>>>> fbc143d2a32c23d79717db42ec31c4af450ea7d3
  });
});
