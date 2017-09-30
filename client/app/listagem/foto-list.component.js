"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var foto_service_1 = require('../foto/foto.service');
require('rxjs/Rx');
var FotoListComponent = (function () {
    function FotoListComponent(_service, _router, _route) {
        this._service = _service;
        this._router = _router;
        this._route = _route;
        this.count = 0;
        this.offset = 0;
        this.limit = 20;
        this.loading = false;
        this.failed = false;
    }
    FotoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var observable = this._route.params
            .map(function (params) { return params['nr']; })
            .map(function (pageNr) { return (pageNr - 1) * _this.limit; });
        observable.subscribe(function (offset) { return _this.offset = offset; });
        observable.share().subscribe(function (offset) { return _this.findAll(offset, _this.limit); });
    };
    FotoListComponent.prototype.findAll = function (offset, limit) {
        var _this = this;
        this.fotos = [];
        this.loading = true;
        this.failed = false;
        this._service.findAll(offset, limit).subscribe(function (result) {
            _this.limit = result.length;
            _this.fotos = result;
            _this.loading = false;
        }, function () {
            _this.loading = false;
            _this.failed = true;
        });
    };
    FotoListComponent.prototype.onPageChange = function (offset) {
        this.offset = offset;
        this._router.navigate(['/page', (offset / this.limit) + 1]);
    };
    FotoListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            providers: [foto_service_1.FotoService],
            selector: 'listagem',
            templateUrl: './foto-list.component.html'
        }), 
        __metadata('design:paramtypes', [foto_service_1.FotoService, router_1.Router, router_1.ActivatedRoute])
    ], FotoListComponent);
    return FotoListComponent;
}());
exports.FotoListComponent = FotoListComponent;
//# sourceMappingURL=foto-list.component.js.map