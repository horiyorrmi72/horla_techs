import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  noSort = () => 0

  profile = {
    name: 'Yusuf Ridwan',
    occupation: 'software engineer',
    likes: ['snowboarding', 'tacos'],
  };

  socialLinks = [
    { name: 'LinkedIn', icon: '../assets/linkedin.png', link: 'https://www.linkedin.com/in/horla/' },
    { name: 'Twitter', icon: '../assets/x-ico.png', link: 'https://x.com/horla_techs' },
    { name: 'Github', icon: '../assets/git-ico.png', link: 'https://github.com/horiyorrmi72' },
    
  ];

}
