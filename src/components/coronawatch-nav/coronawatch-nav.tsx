import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "app-coronawatch-nav",
  styleUrl: "coronawatch-nav.scss",
  shadow: true
})
export class CoronawatchNav {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
