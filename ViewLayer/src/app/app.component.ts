import { Component } from '@angular/core';
import { faSearch,faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "FunkyStore";
  faShoppingCart:any = faShoppingCart;
  faSearch = faSearch;


}
