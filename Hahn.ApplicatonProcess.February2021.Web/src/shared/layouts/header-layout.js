var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject } from 'aurelia-dependency-injection';
import { bindable, bindingMode } from 'aurelia-framework';
import { SharedState } from '../state/shared-state';
var HeaderLayout = (function () {
    function HeaderLayout(sharedState) {
        this.activeRoute = '';
        this.sharedState = sharedState;
    }
    HeaderLayout.prototype.routerConfigChanged = function (newValue, oldValue) {
        this.activeRoute = newValue.name;
    };
    __decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], HeaderLayout.prototype, "routerConfig", void 0);
    HeaderLayout = __decorate([
        inject(SharedState),
        __metadata("design:paramtypes", [Object])
    ], HeaderLayout);
    return HeaderLayout;
}());
export { HeaderLayout };
//# sourceMappingURL=header-layout.js.map