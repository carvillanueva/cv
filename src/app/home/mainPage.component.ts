import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-page',
  template: `
  <div class="container">
    <div class="p-5 mb-4 rounded-3">
      <div class="container-fluid py-5" style="text-align:center">
        <h1 class="display-2 fw-bold">I'm a web developer & lifelong learner</h1>
        <p class="fs-4 text-muted container-md">Hi. I am currently a frontend developer at a Family Office. I am always finding ways to better improve my skills and network with new people.</p>
        <button class="btn btn-secondary btn-md" type="button">View my work</button>
      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading fw-normal lh-1">About me</h2>
        <p class="lead text-muted">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
      </div>
      <div class="col-md-5 order-md-1">
        <!-- <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: picborder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> -->
        <span class="border-pic">
          <img src="../assets/profile.jpg" class="profile-img">
        </span>

      </div>
    </div>

    <hr class="featurette-divider">

    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd74vnMAQpi6YDGIKqtMhpRCs0g_yxRPom9Wzqw4zFVv8xc3g/viewform?embedded=true" width="600" height="812" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>


  </div>
  `,
  styles: [`
  
  `]
})


export class MainPageComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }


}
