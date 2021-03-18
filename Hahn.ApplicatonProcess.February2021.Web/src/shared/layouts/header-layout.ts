import {inject} from 'aurelia-dependency-injection';
import {bindable, bindingMode} from 'aurelia-framework';
import {SharedState} from '../state/shared-state';

@inject(SharedState)
export class HeaderLayout {
  activeRoute = '';
  @bindable({defaultBindingMode: bindingMode.twoWay}) routerConfig;
  sharedState: SharedState;

  constructor(sharedState) {
    this.sharedState = sharedState;
  }

  routerConfigChanged(newValue, oldValue) {
    this.activeRoute = newValue.name;
  }
}
