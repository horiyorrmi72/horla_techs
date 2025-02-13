import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  aboutMe = [
    {
      key: 'title',
      description: `I am a passionate and results-driven Backend Engineer with a proven track record in developing scalable,
            high- performance server systems and cross - platform applications.My expertise lies in optimizing backend
            architectures to ensure efficiency and reliability.`
    },
    {
      key: 'title',
      description: ` As a strong collaborator, I thrive on innovative problem-solving and continuous learning. I am dedicated to
            delivering robust, scalable solutions while staying open to new challenges and opportunities for growth.`
    },
    {
      key: 'title',
      description: `some of my significant achievements includes the co-building of a mobile app that can make call to PSTN
            (public
            switch telephone Network) for a private body, Integration of AI into a CRM to act as a lead Qualifier for a
            Real
            Estate company. this experience reflects my dedication to delivering solutions that not only push
            technological
            boundaries but also priotize user trust and data privacy.`
    },
    {
      key: 'title',
      description: `Beyond the screen, I find my solace in the intricate strategies of chess, where the game's complexity
            parallels
            my
            pursuit of excellence in problem-solving and strategic thinking.`
    }
  ]

}
