import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-resume',
  styles: [`
 
  `],
  template: `
    <div class="container" id="resume">
      <div class="col-xs-12">
        <img class="img-round" src="../assets/headshot.jpeg" alt="Head shot of Carlos">
      </div>
    </div>
  `
})


export class ResumeComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }


}
