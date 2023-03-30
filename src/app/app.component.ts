import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  searchValue: string = '';

  searchResponse: string = '';

  searchFieldValue(value: any) {
    this.searchValue = (<HTMLInputElement>value.target).value;
  }

  onSearch() {
    this.searchResponse = 'A pesquisa efetuada foi: ' + this.searchValue;
  }

}
