import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostResolver implements Resolve<any>{
    constructor(private http: Http) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        let id = route.params['id'];
        return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .map(res => res.json());
    }
}
