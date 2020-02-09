import { Component, Prop, State, h } from '@stencil/core';
import { Store } from '@stencil/redux';

import { configureStore } from '../../store';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
  @State()
  name: AppState['page']['name'] = '';

  @Prop({ context: 'store' })
  store: Store = {} as Store;

  async componentWillLoad() {
    this.store.setStore(configureStore({}));
    this.store.mapStateToProps(this, (state: AppState) => {
      const {
        page: { name }
      } = state;
      return {
        name
      };
    });
  }

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
