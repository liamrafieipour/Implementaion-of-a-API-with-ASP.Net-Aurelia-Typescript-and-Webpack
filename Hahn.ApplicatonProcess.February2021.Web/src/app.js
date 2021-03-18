var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { PLATFORM } from 'aurelia-pal';
import 'bootstrap';
import { inject } from 'aurelia-dependency-injection';
import { AssetService } from './shared/services/asset-service';
var App = (function () {
    function App() {
        this.message = 'Hello World! 1000';
    }
    App.prototype.configureRouter = function (config, router) {
        config.title = 'Hahn';
        config.map([
            { route: ['', 'assets'], moduleId: PLATFORM.moduleName('./components/asset/assets-list-component'), name: 'home', title: 'Assets' },
            { route: ['', 'create'], moduleId: PLATFORM.moduleName('./components/asset/assets-edit-component'), name: 'create', title: 'Create' },
        ]);
        this.router = router;
    };
    App = __decorate([
        inject(AssetService),
        __metadata("design:paramtypes", [])
    ], App);
    return App;
}());
export { App };
//# sourceMappingURL=app.js.map