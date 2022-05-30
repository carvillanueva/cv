import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-footer',
  template: `
    <footer class="text-muted py-5">
        <div class="container">
            <p class="float-end mb-1">
                <a href="#">Back to top</a>
            </p>
            <p class="mb-1">&copy; 2022 C-Studios, Inc. &middot; <a href="#">Home</a> &middot; <a href="#">Work</a>&middot; <a href="#">Resume</a> &middot; <a href="#">Contact</a></p>
            <p class="mb-0">Made By Carlos Villanueva</p>
        </div>
    </footer>
  `,
  styles: [`
  
  `]
})


export class FooterComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }


}
