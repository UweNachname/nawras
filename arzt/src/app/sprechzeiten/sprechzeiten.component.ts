import { Component } from '@angular/core';
import { CommonComponent } from '../shared/components/common..component';

@Component({
  selector: 'app-sprechzeiten',
  standalone: true,
  imports: [],
  templateUrl: './sprechzeiten.component.html',
  styleUrl: '../shared/css/common.component.css'
})
export class SprechzeitenComponent extends CommonComponent{
  sendMail() {
    alert('I am the action function for click event');
 }
}
