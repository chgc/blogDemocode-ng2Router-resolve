import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

@Injectable()
export class PostsResolver implements Resolve<any>{
    constructor(private http: Http) {
        
    }

    resolve(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res=>res.json());
    }
}
