import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-resume',
  styles: [`
    .resume-img {
      height: 200px;
      width: 200px;
      display:inline-block;
    }
    .btn-social-icon a {
      color:white;
    }
    .view-selected {
      background-color: lightgrey;
      border-radius: 8px;
      padding: 5px
    }
    .resume-category li:hover {
      background-color: lightgrey;
      transition: .25s ease-in-out;
      border-radius: 8px;
      padding-left: 3px;
      padding-right: 3px;
    }
    .card-info {
      font-size: 11px;
      padding-bottom: 5px;
    }
    .experience-summary li {
      margin-bottom:5px;
      
    }
    .info-list li {
      list-style-type:none;
      display:inline-block;
    }
    .skills-list {
      list-style-type: none;
      columns: 2;
      -webkit-columns: 2;
      -moz-columns: 2;
      padding-left: 1rem;
    }
    .skills-list li::before {
      content: "8"; 
      padding-right:10px; 
      font-family:"Webdings"; 
      color: #2e5077; 
    }
 
  `],
  template: `
    <div class="container">
      <div class="col-xs-12 text-center">
        <img class="img-round resume-img mb-2" src="../assets/images/headshot.jpeg" alt="Head shot of Carlos">
        <div class="template-demo text-center mb-2"> 
          <button class="btn btn-social-icon btn-github"><a href="https://github.com/carvillanueva" target="_blank"><i class="fab fa-github"></i></a></button> 
          <button class="btn btn-social-icon btn-linkedin"><a href="https://www.linkedin.com/in/carlosivillanueva/" target="_blank"><i class="fa fa-linkedin"></i></a></button> 
          <button class="btn btn-social-icon btn-instagram"><a href="https://instagram.com" target="_blank"><i class="fa fa-instagram"></i></a></button>
          <button data-toggle="modal" data-target="#contact" class="btn btn-social-icon btn-other "><i class="fas fa-envelope"></i></button>
          <button class="btn btn-social-icon btn-other"><a href="../assets/TEST.pdf" download="TEST.pdf"><i class="fas fa-file-pdf"></i></a></button>
        </div>
        <div class="text-muted fs-6">
          <ul class="info-list">
            <li>carlos2villanueva@gmail.com &nbsp;</li>
            <li>Birmingham, AL&nbsp;</li>
            <li>(205)-229-1304</li>
          </ul>
        </div>
      </div>

      <div class="col-xs-12 mb-5">
        <div class="d-flex justify-content-center mt-5 resume-category ">
          <ul class="nav nav-pills">
            <li class="nav-item"><a class="nav-link" (click)="view = 'edu'" [ngClass]="{'view-selected': view == 'edu'}">Education</a></li>
            <li class="nav-item"><a class="nav-link" (click)="view = 'work'" [ngClass]="{'view-selected': view == 'work'}">Work Experience</a></li>
            <li class="nav-item"><a class="nav-link" (click)="view = 'skills'" [ngClass]="{'view-selected': view == 'skills'}">Skills/Certifications</a></li>
            <li class="nav-item"><a class="nav-link" (click)="view = 'future'" [ngClass]="{'view-selected': view == 'future'}">What's Next?</a></li>
          </ul>
        </div>

        <!-- EDUCATION -->
        <div *ngIf="view == 'edu'" class="p-5">
          <div class="row experience-title">
            <div class="col-md-9">
              <h4>Treehouse</h4>
              <h5 class="fw-light">Front End Web Development</h5>
            </div>
            <div class="col-md-3">
              <h5 class="float-end">April 2022</h5>
            </div>
          </div>
          <div class="row experience-summary">
            <div class="col-md-12 text-muted">
              <ul>
                <li><p>Completed self-paced (300 hour) technical certification in Fron End Software Engineering.</p></li>
                <li><p>Will be creating various projects such as Responsive layout portfolio, Interactive photo gallery, Game show app, etc.</p></li>
                <li><p>After Completion will be profiecnt in HTML, CSS, JavaScript, APIs, and React.</p></li>
              </ul>
            </div>
          </div>

          <hr class="hr">

          <div class="row experience-title">
            <div class="col-md-9">
              <h4>Mississippi State University</h4>
              <h5 class="fw-light">Bachelors of Science in Biochemistry</h5>
            </div>
            <div class="col-md-3">
              <h5 class="float-end">August 2020</h5>
            </div>
          </div>
          <div class="row experience-summary">
            <div class="col-md-12 text-muted">
              <ul>
                <li><p>Involvement: Lambda Sigma Honors Society, President Scholar, Phi Kappa Tau Fraternity, New Maroon Camp, Student Sucess Scholar</p></li>
                <li><p>Relavent Corsework: Engineer Mechanics, Organic Chemistry, Biosystem Simulation, Molecular Biology, Graphic Communication, Engineering Design</p></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- WORK EXPERIENCE -->
        <div *ngIf="view == 'work'" class="p-5">
          <div class="row experience-title">
            <div class="col-md-9">
              <h4>Application Developer</h4>
              <h5 class="fw-light">Arlington Family Offices</h5>
              <h6 class="fw-light">Birmingham, AL</h6>
            </div>
            <div class="col-md-3">
              <h5 class="float-end">July 2021 - Present</h5>
            </div>
          </div>
          <div class="row experience-summary">
            <div class="col-md-12 text-muted">
              <ul>
                <li><p>Design, develop, test, and maintain application code to meet business requirments, all while working with various technologies including HTML, CSS, JavaScript/TypeScript, Angular, SQL, and C#.</p></li>
                <li><p>Prepare reports, manuals, and other documentation on the status, operation, and maintenance of software.</p></li>
                <li><p>Cross train with teams within Arlington to gain an understanding of the business holistically to produce a high-quality development principle while delievering solutions promptly.</p></li>
              </ul>
            </div>
          </div>

          <hr class="hr">

          <div class="row experience-title">
            <div class="col-md-9">
              <h4>Analytical Chemist</h4>
              <h5 class="fw-light">WST Energy</h5>
              <h6 class="fw-light">Birmingham, AL</h6>
            </div>
            <div class="col-md-3">
              <h5 class="float-end">October 2020 - June 2021</h5>
            </div>
          </div>
          <div class="row experience-summary">
            <div class="col-md-12 text-muted">
              <ul>
                <li><p>Develop, implement, and maintain analytical lab methods for use in product development, problem solving, and customer assistance.</p></li>
                <li><p>Identify and make recommendation for improvements as part of a small team within or outside the department in order to ensure continuous improvemnt.</p></li>
                <li><p>Perform routine performance checks to instruments that are being used for project support (e.g., ICP, UV-VIS spectroscopy, Auto Titrator, Pressure Cells, Etc.)</p></li>
              </ul>
            </div>
          </div>
        </div>


        <!-- SKILLS/CERTIFICATIONS -->
        <div *ngIf="view == 'skills'" class="row p-5">
          <div class="col-xs-12 col-lg-5">
            <label class="fs-5"><u>Skills</u></label>
            <ul class="text-muted skills-list p-3">
              <li>JavaScript</li>
              <li>Next.js</li>
              <li>Angular</li>
              <li>C#</li>
              <li>Microsoft Azure Cloud</li>
              <li>TypeScript</li>
              <li>APIs</li>
              <li>SQL</li>
              <li>Spanish</li>
              <li>French</li>
            </ul>
          </div>
          <div class="row col-xs-12 col-lg-7">
            <label class="fs-5"><u>Certifications</u></label>
            <div class="card m-3" style="width: 18rem;">
              <img src="../assets/images/th.jpeg" class="card-img-top" alt="Treehouse Logo">
              <div class="card-body">
                <h5 class="card-title">Treehouse</h5>
                <p class="fw-light my-0 card-text">Front-End Web Development</p>
                <p class="text-muted my-0 card-info">Issued Apr 2022 &#183; No Expiration Date</p>
                <p class="text-muted my-0 card-info">Credential ID 50180579</p>
                <a href="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/50180579" target="_blank" class="btn btn-sm btn-outline-secondary">Show Credntial <i class="fa fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
            <div class="card m-3" style="width: 18rem;">
              <img src="../assets/images/jpm.jpeg" style="min-height:150px" class="card-img-top" alt="JP Morgan & Co Logo">
              <div class="card-body">
                <h5 class="card-title">JPMorgan Chase & Co.</h5>
                <p class="fw-light my-0 card-text">Software Engineering Virtual Experience</p>
                <p class="text-muted my-0 card-info">Issued Sept 2022 &#183; No Expiration Date</p>
                <p class="text-muted my-0 card-info">Credential ID 3fJbwYsQ7SJ37SRMm</p>
                <a href="https://insidesherpa.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase_Sst7JECWfG4A2gBf5_1631666386348_completion_certificate.pdf" target="_blank" class="btn btn-sm btn-outline-secondary">Show Credntial <i class="fa fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
          </div>
        </div>


        <!-- WHAT'S NEXT? -->
        <div *ngIf="view == 'future'" class="p-5 text-center">
          <label class="fs-5"><u>What's Next?</u></label>



        </div>
      </div>



    </div>
  `
})


export class ResumeComponent implements OnInit {
  public view: string = 'edu';

  constructor() { }

  ngOnInit() { }

  public changeView(path: string) {
    console.log(path);
    console.log(this.view);
      
  
  }


}
