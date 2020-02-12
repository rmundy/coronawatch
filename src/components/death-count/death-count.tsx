import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-death-count',
  styleUrl: 'death-count.scss',
  shadow: true
})
export class DeathCount {
  render() {
    return (
      <Host>
        <slot>
          <div class="death-count__wrapper">
            <p class="death-count__title">Death Count</p>
            <p class="death-count__counter">910</p>
          </div>
        </slot>
      </Host>
    );
  }
}
