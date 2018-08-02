import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthenticationService} from '../_services/index';

@Component({
  templateUrl: './example.component.html'
})
export class ExampleComponent implements OnInit {
  model: any = {};

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  click() {
    alert('Hello ... ' + this.model.name + ' ' + this.model.lastName);
  }

}
