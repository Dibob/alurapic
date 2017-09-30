import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';
import 'rxjs/Rx';


@Component({
  moduleId: module.id,  
  providers: [FotoService],
  selector: 'listagem',
  templateUrl: './foto-list.component.html'
})
export class FotoListComponent implements OnInit {
  fotos: FotoComponent[];
  count: number = 0;
  offset: number = 0;
  limit: number = 20;
  loading: boolean = false;
  failed: boolean = false;
  constructor(private _service: FotoService, private _router: Router, private _route: ActivatedRoute) {}

  ngOnInit() {
    let observable = this._route.params
      .map(params => params['nr'])
      .map(pageNr => (pageNr - 1) * this.limit);
    observable.subscribe(offset => this.offset = offset);
    observable.share().subscribe(offset => this.findAll(offset, this.limit));
  }

  findAll(offset: number, limit: number) {
    this.fotos = [];
    this.loading = true;
    this.failed = false;
    this._service.findAll(offset, limit).subscribe(result => {
      this.limit = result.length;
      this.fotos = result;
      this.loading = false;
    }, () => {
      this.loading = false;
      this.failed = true;
    });
  }

  onPageChange(offset) {
    this.offset = offset;
    this._router.navigate(['/page', (offset / this.limit) + 1]);
  }
}