import { Component, OnInit } from '@angular/core';

import { UserService } from './core';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor (
    private userService: UserService
  ) {}
  
  
  ngOnInit()
  {
    //String:hasLifecycleHook;
    this.userService.populate();
  }
}
