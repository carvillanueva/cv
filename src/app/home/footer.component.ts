import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-footer',
  styles: [`
    .foot {
      padding-top: 100px;
      padding-bottom: 100px;
      background-color: #2e5077;
    }
    a {
      color:white;
      text-decoration: none;
    }
  `],
  template: `
    <footer class="text-muted pt-5">
        <div class="foot">
          <div class="container">
            <p class="mb-1 col-xs-12">&copy; 2022 C-Studios, Inc. &middot; <a href="#">Home</a> &middot; <a href="#portfolio">Work</a>&middot; <a href="/resume">Resume</a> &middot; <a href="#contact">Contact</a></p>
            <p class="mb-1 col-xs-12">Made By Carlos Villanueva</p>
            <p class="float-end mb-1 col-xs-12"><a href="#">Back to top</a></p>
          </div>
        </div>
    </footer>
  `
})


export class FooterComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }


}
