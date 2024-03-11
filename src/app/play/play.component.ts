import { Component } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent {
  isToggle = false;
  greenBackground = 'background-green';
  imageUrl = 'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg';

  handleClick(event: Event) {
    console.log('clicked!', event);
    this.isToggle = !this.isToggle;
  }
}
