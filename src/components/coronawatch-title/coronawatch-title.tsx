import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "app-coronawatch-title",
  styleUrl: "coronawatch-title.scss",
  shadow: true
})
export class CoronawatchTitle {
  @Prop() lastUpdated: string;

  render() {
    return (
      <Host>
        <slot>
          <div class="coronawatch-title__text">CoronaWatch: 2019-nCoV</div>
          <div class="coronawatch-title__date">
            Last updated: {this.lastUpdated}
          </div>
        </slot>
      </Host>
    );
  }
}
