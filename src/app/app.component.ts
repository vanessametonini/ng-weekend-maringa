import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ola mundo';
  listaDePlanetas;

  constructor(ajax: HttpClient){
    ajax
      .get('http://localhost:3000/v2/dados')
      .subscribe(
        (planetasApi) => {
          this.listaDePlanetas = planetasApi
        }
      )
  }
}
