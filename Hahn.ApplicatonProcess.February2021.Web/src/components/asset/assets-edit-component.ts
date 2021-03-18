import {BindingEngine} from 'aurelia-framework';
import {inject} from 'aurelia-dependency-injection';
import {SharedState} from '../../shared/state/shared-state';
import {AssetService} from "../../shared/services/asset-service"
import { Asset } from '../../shared/models/asset';
import { Router } from 'aurelia-router';

@inject(SharedState, BindingEngine, AssetService, Router)
export class AssetEditComponent {
  asset: Asset;
  id: Number;
  sharedState: SharedState;
  bindingEngine;
  assetService: AssetService;
  router: Router;


  constructor(sharedState, bindingEngine, assetService, router) {
    this.sharedState = sharedState;
    this.bindingEngine = bindingEngine;
    this.assetService = assetService;
    this.router = router;
  }

  bind() {
    //this.subscription = this.bindingEngine.propertyObserver(this.sharedState, 'isAuthenticated')
    //  .subscribe((newValue, oldValue) => {
    //    //console.log('homeComponent isAuthenticated: ', newValue)
    //  })
  }

  unbind() {
    /*this.subscription.dispose();*/
  }

  attached() {
  }

  postData() {
    let asset = new Asset();
    asset.Name = "ABC ABCD";
    asset.EMailAdressOfDepartment = "a@a.com";
    asset.CountryOfDepartment = "UK";
    asset.PurchaseDate = new Date();
    this.assetService.post(asset).then(x => this.router.navigateToRoute('assets'));
  }

  getAssets() {
    //let params = {
    //};
    //this.assetService.getAll()
    //  .then(response => {
    //    this.assets.splice(0);
    //    this.assets.push(...response)

    //    // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
    //    //this.totalPages = Array.from(new Array(Math.ceil(response.articlesCount / this.limit)), (val, index) => index + 1);
    //  })
  }

}
