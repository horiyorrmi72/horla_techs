import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  profile = {
    name: 'ethan',
    occupation: 'software engineer',
    likes: ['snowboarding', 'tacos'],
  };

  socialLinks = [
    { name: 'LinkedIn', icon: 'in', link: '#' },
    { name: 'Twitter', icon: 'X', link: '#' },
    { name: 'YouTube', icon: '🎥', link: '#' },
  ];

}
