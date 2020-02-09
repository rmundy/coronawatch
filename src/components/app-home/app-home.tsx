import { Component, h } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  render() {
    return [
      <ion-header>
        <app-coronawatch-title></app-coronawatch-title>
        <app-coronawatch-nav></app-coronawatch-nav>
      </ion-header>,

      <ion-content class="ion-padding"></ion-content>
    ];
  }
}
