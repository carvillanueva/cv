import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-footer',
  styles: [`
    .foot {
      border-top: solid 2px silver;
      padding-top:75px;
      padding-bottom:75px;
      background-color: #2e5077;
    }
  `],
  template: `
    <footer class="text-muted pt-5">
        <div class="foot">
            <p class="float-end mb-1">
                <a href="#">Back to top</a>
            </p>
            <p class="mb-1">&copy; 2022 C-Studios, Inc. &middot; <a href="#">Home</a> &middot; <a href="#portfolio">Work</a>&middot; <a href="#">Resume</a> &middot; <a href="#contact">Contact</a></p>
            <p class="mb-0">Made By Carlos Villanueva</p>
        </div>
    </footer>
  `
})


export class FooterComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }


}
