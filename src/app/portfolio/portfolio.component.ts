import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  projects = [
    {
      title: "Co-Creator of an NLP Application",
      media: "../assets/nodeRest.jpeg",
      achievements: [
        { description: "Architect of the Full Application Suite (iOS, Android) & Responsive Website Infrastructure" },
        { description: "Expertise in Flutter, Flask, and MongoDB" },
        { description: "Implemented Robust Security Protocols for Safeguarding Sensitive Linguistic Data" },
        { description: "Pioneered Advanced Sentiment Analysis Algorithms for Enhanced User Experience" },
        { description: "Contributed to Open Source NLP Projects, Demonstrating Commitment to Knowledge Sharing" }
      ]
    },
    {
      title: "Test 2 Portfolio",
      media: "../assets/sddefault.jpg",
      achievements: [
        { description: "1 Architect of the Full Application Suite (iOS, Android) & Responsive Website Infrastructure" },
        { description: "Expertise in Flutter, Flask, and MongoDB" },
        { description: "Implemented Robust Security Protocols for Safeguarding Sensitive Linguistic Data" },
        { description: "Pioneered Advanced Sentiment Analysis Algorithms for Enhanced User Experience" },
        { description: "Contributed to Open Source NLP Projects, Demonstrating Commitment to Knowledge Sharing" }
      ]
    }
  ]
}
