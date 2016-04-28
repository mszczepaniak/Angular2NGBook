// <reference path="node_modules/angular2/ts/typings/node/node.d.ts" />
// <reference path="node_modules/angular2/typings/browser.d.ts" />

import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";

@Component({
    selector: 'hello-world',
    template: 
    (`<div>
       <ul>
            <li *ngFor="#name of names">
       Hello {{ name }}</li> 
       </ul>
        </div>
    `)
})

class HelloWorld {
    names2: string[];
    names: Array<string>;
    
    constructor() {
        this.names = ['Michal', 'Kamil', 'Szczepaniak', 'Conqueror'];
    } 
}

bootstrap(HelloWorld);
