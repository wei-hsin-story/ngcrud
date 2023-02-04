import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngcrud';
  items: any = [];

  ngOnInit() {
    this.items = [
      {
          label: 'Users',
          icon: 'pi pi-fw pi-users'
      }
    ]
  }





}

