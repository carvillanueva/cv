import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-page',
  template: `
  <div class="container">
    <div class="mb-4" style="max-width: 900px">
      <div class="container py-5" style="text-align:center">
        <h1 class="display-2 fw-bold">I'm a web developer & lifelong learner</h1>
        <p class="fs-5 text-muted container-md">Hi. I am currently a frontend developer at a Family Office. I am always finding ways to better improve my skills and network with new people.</p>
        <button class="btn btn-secondary btn-md" type="button"><a href="#portfolio">View my work</a></button>
      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette container">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading fw-normal lh-1">About me</h2>
        <p class="lead text-muted">I have a Bachelors of Science in Biochemistry from Mississippi State University. I originally wanted to attend Dental School but fell in love with programming. </p>
        <p class="lead text-muted">I started as a self taught developer to get my feet wet. Over time I wanted to get a more formal education in software development. I chose Treehouse for their user friendly platform and self pace option.</p>
        <p class="lead text-muted">I am currently a Junior Application Developer for a fintech company and use all the tricks Treehouse has taught me everyday.</p>
      </div>
      <div class="col-md-5 order-md-1">
        <!-- <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: picborder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> -->
        <span class="border-pic">
          <img src="../assets/profile.jpg" class="profile-img">
        </span>

      </div>
    </div>

    <hr class="featurette-divider">

    <!-- portfolio -->
    <h1 id="portfolio" class="display-4 text-center my-5 text-muted">Portfolio</h1>
			<div class="row containe">
				<div class="col-md-6 col-lg-4">
          <div class="card mb-3">
            <img class="card-img-top" src="../assets/images/employee-directory.png" alt="Employee Directory">
            <div class="card-body">
              <h4 class="card-title">API Employee Directory</h4>
              <button onclick="window.location.href='https://github.com/carvillanueva/employeeDirectory/blob/master/index.html';" class="btn btn-small btn-outline-success">View Code</button>
              <button onclick="window.location.href='https://carvillanueva.github.io/employeeDirectory/'" class="btn btn-small btn-outline-primary">Live Code</button>
              <p class="card-text">JavaScript to fetch and display randomly-generated employee (www.randomuser.me) info from a third-party API.</p>
            </div>
          </div>
				</div>

				<div class="col-md-6 col-lg-4">
          <div class="card mb-3">
            <img class="card-img-top" src="../assets/images/word-game.png" alt="Game Show">
            <div class="card-body">
              <h4 class="card-title">Game Show App</h4>
              <button onclick="window.location.href='https://github.com/carvillanueva/Project-6/blob/main/index.html';"class="btn btn-small btn-outline-success">View Code</button>
              <button onclick="window.location.href='https://carvillanueva.github.io/Project-6/'" class="btn btn-small btn-outline-primary">Live Code</button>
              <p class="card-text">Uses Javascript to set a random phrase that players must guess by entering letters and create Guessing game show app. Similar to the popular WORDLE game.</p>
            </div>
          </div>
				</div>

				<div class="col-md-6 col-lg-4">
			    <div class="card mb-3">
			      <img class="card-img-top" src="../assets/images/phot-gallery.png" alt="Photo Gallart">
			      <div class="card-body">
			        <h4 class="card-title">Interactive Photo Gallery</h4>
              <button onclick="window.location.href='https://github.com/carvillanueva/Project-5/blob/main/index.html';" class="btn btn-small btn-outline-success">View Code</button>
              <button onclick="window.location.href='https://carvillanueva.github.io/Project-5/'" class="btn btn-small btn-outline-primary">Live Code</button>
			        <p class="card-text">An interactive searchable photo gallery created using the most popular programming language JavaScript.</p>
			      </div>
			    </div>
				</div>

				<div class="col-md-6 col-lg-4">
				  <div class="card mb-3">
			      <img class="card-img-top" src="../assets/images/interactive-form.png" alt="Ecma">
			      <div class="card-body">
			        <h4 class="card-title">Online Registration Form</h4>
              <button onclick="window.location.href='https://github.com/carvillanueva/Project-3/blob/main/index.html';" class="btn btn-small btn-outline-success">View Code</button>
              <button onclick="window.location.href='https://carvillanueva.github.io/Project-3/'" class="btn btn-small btn-outline-primary">Live Code</button>
			        <p class="card-text">A responsive, mobile-first registration form using a variety of HTML form elements. There is a variety of CSS styles that were used to design.</p>
			      </div>
			    </div>
				</div>

				<div class="col-md-6 col-lg-4">
			    <div class="card mb-3">
			      <img class="card-img-top" src="../assets/images/coming soon.png" alt="Coming Soon">
			      <div class="card-body">
			        <h4 class="card-title">Coming Soon...</h4>
			        <p class="card-text">Currently creating a small business website. This will allow me to gain real world experience and have a start to my personal brand.</p>
			      </div>
			    </div>
				</div>

				<div class="col-md-6 col-lg-4">
			    <div class="card">
			      <img class="card-img-top" src="../assets/images/coming soon.png" alt="Coming Soon">
			      <div class="card-body">
			        <h4 class="card-title">Coming Soon...</h4>
			        <p class="card-text">Currently creating my business website that will allow me to create website for others. C-Studios LLC. (coming soon)</p>
			      </div>
			    </div>
				</div>
			</div>
      <!-- /portfolio -->


    <!-- <iframe id="contact" src="https://docs.google.com/forms/d/e/1FAIpQLSd74vnMAQpi6YDGIKqtMhpRCs0g_yxRPom9Wzqw4zFVv8xc3g/viewform?embedded=true" width="600" height="812" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> -->


  </div>
  `,
  styles: [`
    .profile-img{
      display: block;
      max-width: 100%;
      height: auto;
    }
    .border-pic {
      border-right: solid 50px black;
    }
    .card-body{
        text-align: center;
    }
  
  `]
})


export class MainPageComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }


}
