import { Component } from '@angular/core';
import { BrainComponent } from '../brain/brain.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [BrainComponent, NgIf],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
  showAnatomyFlag = false;

  showAnatomy() {
    this.showAnatomyFlag = true;
  }

  hideAnatomy() {
    this.showAnatomyFlag = false;
  }
}
