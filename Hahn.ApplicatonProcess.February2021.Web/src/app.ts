import { PLATFORM } from 'aurelia-pal';
import 'bootstrap'
import { inject } from 'aurelia-dependency-injection';
import { AssetService } from './shared/services/asset-service';
import { SharedState } from './shared/state/shared-state';
import { Router, RouteConfig } from 'aurelia-router';
import { Asset } from './shared/models/asset';

@inject(AssetService)
export class App {
  message: String;
  router: Router;

  constructor() {
    this.message = 'Hello World! 1000'; // just for unit testing ;)
  }



  configureRouter(config: RouteConfig, router: Router) {
    config.title = 'Hahn';
    config.map([
      { route: ['', 'assets'], moduleId: PLATFORM.moduleName('./components/asset/assets-list-component'), name: 'assets', title: 'Assets' },
      //{ route: ['assets/:id'], moduleId: PLATFORM.moduleName('./components/asset/assets-edit-component'), name: 'edit', title: 'Edit' },
      { route: ['assets/new'], moduleId: PLATFORM.moduleName('./components/asset/assets-edit-component'), name: 'create', title: 'Create' },
    ]);

    this.router = router;
  }

  //attached() {
  //  this.assetService.getAll();
  //}
}


