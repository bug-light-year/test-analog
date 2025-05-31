import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <div class="text-center mt-10">
      <h1 class="text-4xl font-bold">404 - Сторінку не знайдено</h1>
      <p class="mt-2 text-gray-500">Ми не змогли знайти цю сторінку.</p>
      <a routerLink="/" class="text-blue-500 underline mt-4 inline-block">На головну</a>
    </div>
  `,
})
export default class NotFoundPage {}
