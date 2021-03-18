var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BindingEngine } from 'aurelia-framework';
import { inject } from 'aurelia-dependency-injection';
import { SharedState } from '../../shared/state/shared-state';
import { AssetService } from "../../shared/services/asset-service";
var AssetEditComponent = (function () {
    function AssetEditComponent(sharedState, bindingEngine, assetService) {
        this.assets = [];
        this.shownList = 'all';
        this.tags = [];
        this.filterTag = undefined;
        this.currentPage = 1;
        this.limit = 10;
        this.sharedState = sharedState;
        this.bindingEngine = bindingEngine;
        this.assetService = assetService;
    }
    AssetEditComponent.prototype.bind = function () {
    };
    AssetEditComponent.prototype.unbind = function () {
    };
    AssetEditComponent.prototype.attached = function () {
        this.getAssets();
    };
    AssetEditComponent.prototype.getAssets = function () {
        var _this = this;
        var params = {};
        this.assetService.getAll()
            .then(function (response) {
            var _a;
            _this.assets.splice(0);
            (_a = _this.assets).push.apply(_a, response);
        });
    };
    AssetEditComponent = __decorate([
        inject(SharedState, BindingEngine, AssetService),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], AssetEditComponent);
    return AssetEditComponent;
}());
export { AssetEditComponent };
//# sourceMappingURL=assets-edit-component.js.map