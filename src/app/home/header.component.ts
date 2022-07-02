import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-header',
  styles: [`
    .nav-masthead .nav-link {
      color: slategrey;
      border-bottom: 2px solid transparent;
    }
    .nav-masthead .nav-link:hover,
    .nav-masthead .nav-link:focus {
      border-bottom-color: #2e5077;
      color: #2e5077;
    }
    .nav-masthead .nav-link + .nav-link {
      margin-left: 1rem;
    }
  `],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="py-2 navbar-brand" [routerLink]="['/main']"><img src="favicon.ico" atl="Website Logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup" >
          <div class="navbar-nav nav-masthead mx-auto text-center">
            <a class="mx-5 nav-link" [routerLink]="['/main']">Home</a>
            <a class="mx-5 nav-link" href="#portfolio">Work</a>
            <a class="mx-5 nav-link" [routerLink]="['/resume']">Resume</a>
            <a class="mx-5 nav-link" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  `
})


export class HeaderComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }


}
