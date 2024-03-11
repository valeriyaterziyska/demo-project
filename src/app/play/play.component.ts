import { Component, Input, OnDestroy, OnInit } from '@angular/core';

const IMG_URL = 'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit, OnDestroy {
  @Input('color') colorValue = 'white';

  isToggle = false;
  greenBackground = 'background-green';
  imageUrl = IMG_URL;

  ngOnInit() {
    console.log('Component Created!');
  }

  ngAfterViewInit() {
    console.log('After Init!');
  }

  ngOnDestroy() {
    console.log('On Destroy!');
  }

  ngDoCheck() {
    console.log({isToggle: this.isToggle});
    
  }

  handleClick(event: Event) {
    console.log('clicked!', event);
    this.isToggle = !this.isToggle;
  }
}
