import {inject} from 'aurelia-dependency-injection';
import {ApiService} from './api-service';
import {Asset} from '../models/asset';

@inject(ApiService)
export class AssetService {
  apiService: ApiService;

  constructor(apiService) {
    this.apiService = apiService;
  }

  getAll(): Promise<Asset[]>  {
    return this.apiService.get('/assets', null).then(data => {
      console.log(data);
      return data.map(x => {
        let asset = new Asset();
        asset.Name = x.Name;
        asset.EMailAdressOfDepartment = x.EMailAdressOfDepartment;
        asset.CountryOfDepartment = x.CountryOfDepartment;
        asset.PurchaseDate = x.PurchaseDate;
        return asset;
      });
    });
    
  }

  post(asset: Asset) {
    return this.apiService.post('/assets', asset);
  }

}
