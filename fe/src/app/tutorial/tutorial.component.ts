import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../tutorial.model';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  tutorials?: Tutorial[];
  newTutorial: Tutorial = { id: '', title: '', description: '', published: false };

  constructor(private tutorialService: TutorialService) {}

  ngOnInit() {
    this.getTutorials();
  }

  getTutorials(): void {
    this.tutorialService.getAllTutorials()
      .subscribe({
        next: (data: any) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.log(e)
      });
  }

  onSubmit(): void {
    if (this.newTutorial.id && this.newTutorial.title && this.newTutorial.description) {
      this.tutorialService.addTutorial(this.newTutorial).subscribe(() => {
        this.getTutorials(); // Refresh the list
        this.newTutorial = { id: '', title: '', description: '', published: false };
      });
    }
  }
}
