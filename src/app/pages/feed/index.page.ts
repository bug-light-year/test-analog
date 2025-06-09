import { Component } from '@angular/core';
import {PostComponent} from "../../components/post";

@Component({
  selector: 'app-feed',
  imports: [PostComponent],
  template: `
    <section class="max-w-[576px] mx-auto py-6">
      <h2 class="text-center font-bold text-4xl mb-8">Feed</h2>

      <ul class="grid gap-4">
        <li>
            <app-post />
        </li>
        <li>
          <app-post image="https://analog-ssr.b-cdn.net/IMG_42081.PNG" />
        </li>
        <li>
          <app-post />
        </li>
        <li>
          <app-post image="https://analog-ssr.b-cdn.net/IMG_42081.PNG" />
        </li>
        <li>
          <app-post />
        </li>
        <li>
          <app-post image="https://analog-ssr.b-cdn.net/IMG_42081.PNG" />
        </li>
        <li>
          <app-post />
        </li>
        <li>
          <app-post image="https://analog-ssr.b-cdn.net/IMG_42081.PNG" />
        </li>
      </ul>
    </section>
  `,
})
export default class FeedComponent {}
