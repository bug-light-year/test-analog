import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  template: `
    <h2>Analog</h2>

    <h3>The fullstack meta-framework for Angular!</h3>

    <a [routerLink]="['/', 'feed']" class="text-center text-blue">Go to feed</a>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    @media (prefers-color-scheme: light) {
      .read-the-docs > * {
        color: #213547;
      }
    }
  `,
  imports: [
    RouterLink
  ]
})
export default class HomeComponent {}
