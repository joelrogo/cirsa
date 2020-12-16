import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MyService {
    private myFunctionCallSource = new Subject();

    myFunctionCalled$ = this.myFunctionCallSource.asObservable();

    callMyFunction(){
        this.myFunctionCallSource.next()
    }
}