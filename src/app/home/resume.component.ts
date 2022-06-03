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
    .resume-category span:hover {
      background-color: lightgrey;
      transition: .5s ease-in-out;
      border-radius: 8px;
      padding-left: 3px;
      padding-right: 3px;
    }
    .card-info {
      font-size: 11px;
      padding-bottom: 5px;
    }
    .experience-summary p {
      margin-bottom:5px;
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
        <div class="text-muted fs-6 d-inline-flex">
          <div>carlos2villanueva@gmail.com&nbsp;</div>
          <div>&nbsp;-&nbsp; Birmingham, AL&nbsp;</div>
          <div>&nbsp;-&nbsp; (205)-229-1304</div>
        </div>
      </div>

      <div class="col-xs-12">
        <div class="d-flex justify-content-evenly mt-5 resume-category">
          <span (click)="view = 'edu'">Education</span>
          <span (click)="view = 'work'">Work Experience</span>
          <span (click)="view = 'skills'">Skills/Certifcations</span>
          <span (click)="view = 'future'">What's Next?</span>
        </div>


        <!-- EDUCATION -->
        <div *ngIf="view == 'edu'" class="p-5">
          <div class="row experience-title">
            <div class="col-md-9">
              <h4>Treehouse</h4>
              <h5 class="fw-light">Front End Web Development</h5>
            </div>
            <div class="col-md-3">
              <h5>April 2022</h5>
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
              <h5 class="fw-light">Bachelors of Science in BioChemistry</h5>
            </div>
            <div class="col-md-3">
              <h5>August 2020</h5>
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
              <div class="row col-xs-12" style="border: solid 1px grey; background-color:grey;box-shadow: 5px 5px 12px 7px #0000003b;">
                <div class="col-lg-2">aefgawef</div>
                <div class="col-lg-10">
                  <div class="row experience-title">
                    <div class="col-md-9">
                      <h4>Mississippi State University</h4>
                      <h5 class="fw-light">Bachelors of Science in BioChemistry</h5>
                    </div>
                    <div class="col-md-3">
                      <h5>August 2020</h5>
                    </div>
                  </div>
                  <div class="row experience-summary">
                    <div class="col-md-12 text-muted">
                      <p>Involvement: Lambda Sigma Honors Society, President Scholar, Phi Kappa Tau Fraternity, New Maroon Camp, Student Sucess Scholar</p>
                      <p>Relavent Corsework: Engineer Mechanics, Organic Chemistry, Biosystem Simulation, Molecular Biology, Graphic Communication, Engineering Design</p>
                    </div>
                  </div>
                </div>
              </div>


          <div>
            <label>Application Developer</label>
            <span>Arlington Family Offices</span>
            <span>Birmingham, AL</span>
            <span>July 2021 - Present</span>
            <p>Design, develop, test, and maintain application code to meet business requirments, all while working with various technologies including HTML, CSS, JavaScript/TypeScript, Angular, SQL, and C#.</p>
            <p>Prepare reports, manuals, and other documentation on the status, operation, and maintenance of software.</p>
            <p>Cross train with teams within Arlington to gain an understanding of the business holistically to produce a high-quality development principle while delievering solutions promptly.</p>
          </div>
          <div>
            <label>Analytical Chemist</label>
            <span>WST Energy</span>
            <span>Birmingham, AL</span>
            <span>October 2020 - June 2021</span>
            <p>Develop, implement, and maintain analytical lab methods for use in product development, problem solving, and customer assistance.</p>
            <p>Identify and make recommendation for improvements as part of a small team within or outside the department in order to ensure continuous improvemnt.</p>
            <p>Perform routine performance checks to instruments that are being used for project support (e.g., ICP, UV-VIS spectroscopy, Auto Titrator, Pressure Cells, Etc.)</p>
          </div>
        </div>


        <!-- SKILLS/CERTIFICATIONS -->
        <div *ngIf="view == 'skills'" class="row p-5">
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


        <!-- WHAT'S NEXT? -->
        <div *ngIf="view == 'future'" class="p-5">



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
