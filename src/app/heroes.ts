import { Injectable } from '@angular/core';

@Injectable()
export class Heroes {
    get() {
        return (2*6);
    }
}
