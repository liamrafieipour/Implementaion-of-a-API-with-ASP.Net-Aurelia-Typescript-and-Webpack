import {BindingEngine} from 'aurelia-framework';
import {inject} from 'aurelia-dependency-injection';
import {SharedState} from '../../shared/state/shared-state';
import {AssetService} from "../../shared/services/asset-service"
import { Asset } from '../../shared/models/asset';
import { Router } from 'aurelia-router';

@inject(SharedState, BindingEngine, AssetService, Router)
export class AssetListComponent {
  assets: Asset[] = [];
  sharedState: SharedState;
  assetService: AssetService;
  router: Router;
  bindingEngine;


  constructor(sharedState, bindingEngine, assetService, router) {
    this.sharedState = sharedState;
    this.bindingEngine = bindingEngine;
    this.assetService = assetService;
    this.router = router;
  }

  async bind() {
  }

  unbind() {
  }

  async attached() {
    let assets = await this.assetService.getAll();
    this.assets.push(...assets);
  }


  btnNewClick() {
    this.router.navigateToRoute('create');
  }

}
