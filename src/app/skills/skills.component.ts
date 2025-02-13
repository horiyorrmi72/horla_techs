import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    {
      name: "HTML",
      icon:"fa-brands fa-html5"
    },
    {
      name: "CSS",
      icon:"fa-brands fa-css3"
    },
    {
      name: "SASS",
      icon:"fa-brands fa-sass"
    },
    {
      name: "Bootstrap",
      icon:"fa-brands fa-bootstrap"
    },
    {
      name: "Materialize CSS",
      icon:""
    },
    {
      name: "JavaScript",
      icon:"fa-brands fa-js"
    },
    {
      name: "Angular Js",
      icon:"fa-brands fa-angular"
    },
    {
      name: "Node.js",
      icon:"fa-brands fa-node-js"
    },
    {
      name: "Express js",
      icon:"-"
    },
    {
      name: "Nest js",
      icon:"-"
    },
    {
      name: "Python",
      icon:"fa-brands fa-python"
    },
    {
      name: "Django",
      icon:"-"
    },
    {
      name: "Flask",
      icon:"-"
    },
    {
      name: "SQL",
      icon:"fa-solid fa-database"
    },
    {
      name: "Mongoose",
      icon:"-"
    },
    {
      name: "API Integration",
      icon:"-"
    },
  ]

}
