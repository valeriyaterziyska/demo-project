import { Component } from "@angular/core";

@Component({
    selector: 'app-nav',
    template: `<div id="nav-wrapper">Hello navigation</div>
        <div> {{ title }}</div>`,
    styles: ['#nav-wrapper: {background-color: pink}']
})

export class NavComponent {
    title = 'some title';
}