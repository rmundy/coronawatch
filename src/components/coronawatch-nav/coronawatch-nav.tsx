import { Component, Host, Prop, State, h } from "@stencil/core";
import { Store, Unsubscribe } from "@stencil/redux";

@Component({
  tag: "app-coronawatch-nav",
  styleUrl: "coronawatch-nav.scss",
  shadow: true
})
export class CoronawatchNav {
  storeUnsubscribe: Unsubscribe;

  @State()
  name: AppState["page"]["name"];

  @Prop({ context: "store" })
  store: Store;

  componentWillLoad() {
    this.storeUnsubscribe = this.store.mapStateToProps(
      this,
      (state: AppState) => {
        const {
          page: { name }
        } = state;
        return {
          name
        };
      }
    );
  }

  componentDidUnload() {
    this.storeUnsubscribe();
  }

  render() {
    return (
      <Host>
        <slot>
          <div class="coronawatch-nav__wrapper">
            <div class="coronawatch-nav__default">CoronaVirus Facts</div>
            <div class="coronawatch-nav__back">Back</div>
          </div>
        </slot>
      </Host>
    );
  }
}
