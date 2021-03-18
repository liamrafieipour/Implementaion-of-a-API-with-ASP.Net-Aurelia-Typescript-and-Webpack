import {config} from './config';
import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-dependency-injection';
import * as qs from 'querystringify';
import {status, parseError} from './service-helper';

@inject(HttpClient)
export class ApiService {
  http: HttpClient;

  constructor(http) {
    this.http = http;
  }

  setHeaders() {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    return new Headers(headersConfig);
  }

  get(path, params) {
    const options = {
      method: 'GET',
      headers: this.setHeaders()
    };
    return this.http.fetch(`${config.api_url}${path}?${qs.stringify(params)}`,options)
      .then(status)
      .catch(parseError)
  }

  put(path, body = {}) {
    const options = {
      method: 'PUT',
      headers: this.setHeaders(),
      body: json(body)
    };
    return this.http.fetch(`${config.api_url}${path}`,options)
      .then(status)
      .catch(parseError)
  }

  post(path, body = {}) {
    const options = {
      method: 'POST',
      headers: this.setHeaders(),
      body: json(body)
    };
    return this.http.fetch(`${config.api_url}${path}`,options)
      .then(status)
      .catch(parseError)
  }

  delete(path) {
    const options = {
      method: 'DELETE',
      headers: this.setHeaders()
    };
    return this.http.fetch(`${config.api_url}${path}`,options)
      .then(status)
      .catch(parseError)
  }
}
