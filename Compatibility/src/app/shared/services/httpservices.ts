import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {System} from '../../dashboard/compatibility.matrix/system.model';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
  systems:System[];
    constructor(private http: Http) {

      }

    getSystems() {
      return this.http.get('http://10.167.178.54:59113/CompatibilityMatrix/GetAllProducts')
        .map(res => res.json());
          }
        }

