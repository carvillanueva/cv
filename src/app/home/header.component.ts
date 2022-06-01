import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-header',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand" href="#">Carlos Villanueva</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup" style="justify-content: right;">
          <div class="navbar-nav">
            <a class="nav-link" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#portfolio">Work</a>
            <a class="nav-link" href="#">Resume</a>
            <a class="nav-link" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>

  `,
  styles: [`
  
  `]
})


export class HeaderComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }


}
