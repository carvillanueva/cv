import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-resume',
  styles: [`
    .resume-img {
      height: 200px;
      width: 200px;
      display:inline-block;
    }
    a {
      color:white;
    }
    .resume-category span:hover {
      background-color: lightgrey;
      transition: .5s ease-in-out;
      border-radius: 8px;
      padding-left: 3px;
      padding-right: 3px;
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
          <span>Education</span>
          <span>Work Experience</span>
          <span>Skills/Certifcations</span>
          <span>What's Next?</span>
        </div>

        <div class="p-5">
          <div>
            <label>Treehouse</label>
            <span>Front End Web Development</span>
            <span>April 2022</span>
            <p>Completed self-paced (300 hour) technical certification in Fron End Software Engineering.</p>
            <p>Will be creating various projects such as Responsive layout portfolio, Interactive photo gallery, Game show app, etc.</p>
            <p>After Completion will be profiecnt in HTML, CSS, JavaScript, APIs, and React.</p>
          </div>
          <div>
            <label>Mississippi State University</label>
            <span>Bachelor of Science in BioChemistry</span>
            <span>August 2020</span>
            <p>Involvement: Lambda Sigma Honors Society, President Scholar, Phi Kappa Tau Fraternity, New Maroon Camp, Student Sucess Scholar</p>
            <p>Relavent Corsework: Engineer Mechanics, Organic Chemistry, Biosystem Simulation, Molecular Biology, Graphic Communication, Engineering Design</p>
          </div>
        </div>

        <div class="p-5">
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

        <div class="p-5">
          <div>
            <label>Treehouse</label>
            <span>Front End Web Development</span>
            <p>Show Credential <i class="fa fa-arrow-up-right-from-square"></i></p>
          </div>
          <div>
            <label>JPMorgan Chase & Co.</label>
            <span>Software Engineering Virtual Experience</span>
            <p>Show Credential <i class="fa fa-arrow-up-right-from-square"></i></p>
          </div>
  
        </div>
      </div>




      RESUME





    </div>
  `
})


export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }


}
