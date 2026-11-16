import { CurrencyPipe, DatePipe, TitleCasePipe, UpperCasePipe , JsonPipe, DecimalPipe} from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { NamepersoPipe } from '../nameperso-pipe';

@Component({
  imports: [CurrencyPipe,UpperCasePipe,TitleCasePipe,DatePipe,JsonPipe,DecimalPipe,NamepersoPipe],
  selector: 'app-country',
  styleUrl: './country.css',
  templateUrl: './country.html',
})
export class Country {
  country= {
    name:'tunisie',
    capital:'tunis',
    independence: new Date(1956, 2,20), 
    area:163.61,
    gdp: 12000} 
}
