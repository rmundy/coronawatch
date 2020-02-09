import { Component, Host, Prop, State, h } from '@stencil/core';
import { Store, Unsubscribe } from '@stencil/redux';

@Component({
  tag: 'app-coronawatch-nav',
  styleUrl: 'coronawatch-nav.scss',
  shadow: true
})
export class CoronawatchNav {
  private storeUnsubscribe: Unsubscribe;

  @State()
  name: AppState['page']['name'];

  @Prop({ context: 'store' })
  store: Store;

  componentWillLoad() {
    this.storeUnsubscribe = this.store.mapStateToProps(this, (state: AppState) => {
      const {
        page: { name }
      } = state;
      return {
        name
      };
    });
  }

  componentDidUnload() {
    this.storeUnsubscribe();
  }

  render() {
    return (
      <Host>
        <slot>
          <div class="coronawatch-nav__wrapper">
            <div class="coronawatch-nav__default">
              <span>Coronavirus Facts</span>
              <img
                class="coronawatch-nav__default__img"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIsMEExMiwxMiwwLDEsMCwyNCwxMiwxMiwxMiwwLDAsMCwxMiwwWk0xMC40MzIsMTgsOS4wMTgsMTYuNTksMTMuNTkyLDEyLDkuMDE4LDcuNDIxbDEuNDE0LTEuNDE2TDE2LjQyLDEybC01Ljk4OCw2LjAwNVoiIGZpbGw9IiNmZmYiLz48L3N2Zz4="
              ></img>
            </div>
            <div class="coronawatch-nav__back">
              <span>Back</span>
              <img
                class="coronawatch-nav__back__img"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIsMEExMiwxMiwwLDEsMCwyNCwxMiwxMiwxMiwwLDAsMCwxMiwwWk0xMC40MzIsMTgsOS4wMTgsMTYuNTksMTMuNTkyLDEyLDkuMDE4LDcuNDIxbDEuNDE0LTEuNDE2TDE2LjQyLDEybC01Ljk4OCw2LjAwNVoiIGZpbGw9IiNmZmYiLz48L3N2Zz4="
              ></img>
            </div>
          </div>
        </slot>
      </Host>
    );
  }
}
