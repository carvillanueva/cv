import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-page',
  styles: [`
    .profile-img{
      display: block;
      max-width: 100%;
      height: auto;
    }
    a {
      color: white;
      text-decoration: none;
    }
    ul {
      list-style-type: none;
      columns: 2;
      -webkit-columns: 2;
      -moz-columns: 2;
      padding-left: 1rem;
    }
    li::before {
      content: "8"; 
      padding-right:10px; 
      font-family:"Webdings"; 
      color: #2e5077; 
    }
    .card-body{
      text-align: center;
    }
    .card {
      min-height:440px;
    }
    .card-img-top {
      min-height: 230px;
      max-height: 230px;
    }
    .headerName {
      font-weight: 300;
      font-size: 16px;
    }
    .image-holder {
      border: 7px solid #2e5077;
      display: inline-block;
      background-color: #2e5077;
      vertical-align: top;
    }
    .image-holder img {
      transform: translate(25px, 25px);
      position: relative;
      z-index: 5;
    }

    
  
  `],
  template: `
  <div class="container fadePage">
    <div class="mb-4">
      <div class="py-5" style="text-align:center">
        <div class="mx-auto" style="max-width: 900px">
          <h1 class="display-2 fw-bold">Front End Software Engineer & Lifelong Learner</h1>
          <p class="fs-5 text-muted container-md">Hi! Thanks for stopping by. I am currently an Application Developer at Arlington Family Offices. Feel free to contact me!</p>
          <button class="btn btn-md" type="button" style="background-color: #2e5077;"><a href="#portfolio">View my work</a></button>
        </div>
      </div>
    </div>


    <div class="row featurette container">
      <div class="col-md-5">
        <div class="image-holder">
          <img src="../assets/profile.jpg" class="profile-img" alt="Picture of Carlos">
        </div>
      </div>
      <div class="col-md-7 px-4 mt-4">
        <h2 class="featurette-heading fw-normal lh-1">About me <p class="headerName text-muted">Carlos Villanueva</p></h2>
        <p class="lead text-muted">I have a Bachelors of Science in Biochemistry from Mississippi State University. I originally had dreams of attending dental school but fell in love with programming. </p>
        <p class="lead text-muted">I started as a self taught developer to get my feet wet. Over time I wanted to get a more formal education in software development which lead me to choose <span href="https://teamtreehouse.com/" target="_blank">Treehouse</span> for their user-friendly platform and self-pace option.</p>
        <p class="lead text-muted">I am currently a Junior Application Developer for a fintech company and have loved working as a developer.</p>
        <p class="lead text-muted">Technologies and tools I've been working with recently:</p>
          <ul class="text-muted">
            <li>JavaScript</li>
            <li>Next.js</li>
            <li>Angular</li>
            <li>C#</li>
            <li>Microsoft Azure Cloud</li>
            <li>APIs</li>
            <li>SQL</li>
          </ul>
      </div>
    </div>


    <!-- portfolio -->
    <div class="container py-4">
      <h1 id="portfolio" class="display-4 text-center my-5 text-muted">Portfolio</h1>
			<div class="row">
        <div class="col-md-6 col-lg-4">
          <div class="card mb-3">
            <img class="card-img-top" src="../assets/images/employee-directory.png" alt="Employee Directory">
            <div class="card-body">
              <h4 class="card-title">API Employee Directory</h4>
              <button onclick="window.location.href='https://github.com/carvillanueva/employeeDirectory/blob/master/index.html';" class="btn btn-small btn-outline-success mx-2">View Code</button>
              <button onclick="window.location.href='https://carvillanueva.github.io/employeeDirectory/'" class="btn btn-small btn-outline-primary mx-2">Live SIte</button>
              <p class="card-text">JavaScript to fetch and display randomly-generated employee (www.randomuser.me) info from a third-party API.</p>
            </div>
          </div>
				</div>
        
				<div class="col-md-6 col-lg-4">
          <div class="card mb-3">
            <img class="card-img-top" src="../assets/images/word-game.png" alt="Game Show">
            <div class="card-body">
              <h4 class="card-title">Game Show App</h4>
              <button onclick="window.location.href='https://github.com/carvillanueva/Project-6/blob/main/index.html';"class="btn btn-small btn-outline-success mx-2">View Code</button>
              <button onclick="window.location.href='https://carvillanueva.github.io/Project-6/'" class="btn btn-small btn-outline-primary mx-2">Live SIte</button>
              <p class="card-text">Uses Javascript to set a random phrase that players must guess by entering letters and create Guessing game show app. Similar to the popular WORDLE game.</p>
            </div>
          </div>
				</div>
        
				<div class="col-md-6 col-lg-4">
          <div class="card mb-3">
            <img class="card-img-top" src="../assets/images/phot-gallery.png" alt="Photo Gallart">
			      <div class="card-body">
              <h4 class="card-title">Interactive Photo Gallery</h4>
              <button onclick="window.location.href='https://github.com/carvillanueva/Project-5/blob/main/index.html';" class="btn btn-small btn-outline-success mx-2">View Code</button>
              <button onclick="window.location.href='https://carvillanueva.github.io/Project-5/'" class="btn btn-small btn-outline-primary mx-2">Live SIte</button>
			        <p class="card-text">An interactive searchable photo gallery created using the most popular programming language JavaScript.</p>
			      </div>
			    </div>
				</div>
        
				<div class="col-md-6 col-lg-4">
          <div class="card mb-3">
            <img class="card-img-top" src="../assets/images/interactive-form.png" alt="Ecma">
			      <div class="card-body">
              <h4 class="card-title">Online Registration Form</h4>
              <button onclick="window.location.href='https://github.com/carvillanueva/Project-3/blob/main/index.html';" class="btn btn-small btn-outline-success mx-2">View Code</button>
              <button onclick="window.location.href='https://carvillanueva.github.io/Project-3/'" class="btn btn-small btn-outline-primary mx-2">Live SIte</button>
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
        
				<!-- <div class="col-md-6 col-lg-4">
          <div class="card">
            <img class="card-img-top" src="../assets/images/coming soon.png" alt="Coming Soon">
			      <div class="card-body">
              <h4 class="card-title">Coming Soon...</h4>
			        <p class="card-text">Currently creating my business website that will allow me to create website for others. C-Studios LLC. (coming soon)</p>
			      </div>
			    </div>
				</div> -->
			</div>
    </div>
      <!-- /portfolio -->
      
      
    <div class="container mx-auto my-5" id="contact" style="max-width:650px;">
      <div class="row p-4 align-items-center rounded-3 border shadow-lg">
        <div class="col-xs-12 p-3 text-center">
          <h1 class="display-4 fw-bold">Contact me!!</h1>
          <p class="lead">Feel free to contact me with any questions you may have!</p>
          <span class="text-mute fs-6">Social Links</span>
          <div class="template-demo text-center mb-2"> 
            <button class="btn btn-social-icon btn-github"><a href="https://github.com/carvillanueva" target="_blank"><i class="fab fa-github"></i></a></button> 
            <button class="btn btn-social-icon btn-linkedin"><a href="https://www.linkedin.com/in/carlosivillanueva/" target="_blank"><i class="fa fa-linkedin"></i></a></button> 
            <button class="btn btn-social-icon btn-instagram"><a href="https://instagram.com" target="_blank"><i class="fa fa-instagram"></i></a></button>
            <button data-toggle="modal" data-target="#contact" class="btn btn-social-icon btn-other "><i class="fas fa-envelope"></i></button>
            <button class="btn btn-social-icon btn-other"><a href="../assets/TEST.pdf" download="TEST.pdf"><i class="fas fa-file-pdf"></i></a></button>
          </div>
        </div>
        <form class="row col-xs-12 g-3" action="https://formsubmit.co/carlos2villanueva@gmail.com" method="POST">
          <!-- HoneyPot -->
          <input type="text" name="_honey" style="display:none">

          <!-- Disable Captcha -->
          <input type="hidden" name="_captcha" value="false">

            <div class="col-sm-6">
              <label for="firstName" class="form-label">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder="John" name="name" required>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder="Doe" name="Last&nbsp;Name" required>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com" name="email" required>
              <div class="invalid-feedback">
                Please enter a valid email address.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Subject</label>
              <input type="text" class="form-control" id="address" placeholder="Networking" name="subject" required>
              <div class="invalid-feedback">
                Please enter a subject.
              </div>
            </div>

            <div class="col-12">
              <label class="form-label">Message</label>
              <textarea type="text" class="form-control" row="5" placeholder="Do you want to be friends?:)" name="message" required></textarea>
              <div class="invalid-feedback">
                Please enter a message.
              </div>
            </div>

            <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="submit" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Send <i class="fa-solid fa-paper-plane"></i></button>
            </div>
            <p class="message-disclaimer text-muted fs-6">*Please allow 2 business days to respond. Thank you.</p>
        </form>
      </div>
    </div>



  </div>
  `
})


export class MainPageComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }


}
