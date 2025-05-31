import { Component } from '@angular/core';
import {PostComponent} from "../../components/post";

@Component({
  selector: 'app-feed',
  imports: [PostComponent],
  template: `
    <section class="max-w-[576px] mx-auto py-6">
      <h2 class="text-center font-bold text-4xl mb-8">Feed</h2>

      <app-post />
    </section>
  `,
})
export default class FeedComponent {}
