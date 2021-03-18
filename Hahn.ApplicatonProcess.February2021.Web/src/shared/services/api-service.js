var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { config } from './config';
import { HttpClient, json } from 'aurelia-fetch-client';
import { inject } from 'aurelia-dependency-injection';
import * as qs from 'querystringify';
import { status, parseError } from './service-helper';
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.setHeaders = function () {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        return new Headers(headersConfig);
    };
    ApiService.prototype.get = function (path, params) {
        var options = {
            method: 'GET',
            headers: this.setHeaders()
        };
        return this.http.fetch("" + config.api_url + path + "?" + qs.stringify(params), options)
            .then(status)
            .catch(parseError);
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        var options = {
            method: 'PUT',
            headers: this.setHeaders(),
            body: json(body)
        };
        return this.http.fetch("" + config.api_url + path, options)
            .then(status)
            .catch(parseError);
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        var options = {
            method: 'POST',
            headers: this.setHeaders(),
            body: json(body)
        };
        return this.http.fetch("" + config.api_url + path, options)
            .then(status)
            .catch(parseError);
    };
    ApiService.prototype.delete = function (path) {
        var options = {
            method: 'DELETE',
            headers: this.setHeaders()
        };
        return this.http.fetch("" + config.api_url + path, options)
            .then(status)
            .catch(parseError);
    };
    ApiService = __decorate([
        inject(HttpClient),
        __metadata("design:paramtypes", [Object])
    ], ApiService);
    return ApiService;
}());
export { ApiService };
//# sourceMappingURL=api-service.js.map