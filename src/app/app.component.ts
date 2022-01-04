import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface Products {
  id: string;
  name: string;
  brandname: string;
  metakeywords: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  productControl = new FormControl();
  filteredProducts: Observable<Products[]>;

  options: Products[] = [
  {id: '106433', name: 'Affaldssæk 70x110 cm 100 liter sort LD', brandname: 'Cleanline', metakeywords: 'sæk',}, 
  {id: '106432', name: 'Affaldssæk 70x110 cm 100 liter klar LD', brandname: 'Cleanline', metakeywords: 'sæk',}, 
  {id: '60051', name: 'Overfladedesinfektionsserviet enkeltpakket 85% 250 stk', brandname: 'EB', metakeywords: 'spritservietter',}, 
  {id: '60050', name: 'Hånddesinfektionsserviet enkeltpakket 75% 250 stk', brandname: 'EB', metakeywords: 'håndspritserviet',}, 
  {id: '393763', name: 'Lamineringslomme A3 125 Mic 100 stk', brandname: 'Fellowes', metakeywords: 'A3 lamineringslomme',}, 
  {id: '393762', name: 'Lamineringslomme A4 125 Mic 100 stk', brandname: 'Fellowes', metakeywords: 'A4 lamineringslomme',}, 
  {id: '1717483', name: 'Tallerken flergangs Ø23 cm lysegrå 25 stk', brandname: '', metakeywords: '',}, 
  {id: '107982', name: 'Kildevand Denice 0,50 Ltr 20 stk', brandname: 'Aqua dor', metakeywords: '',}, 
  {id: '106177', name: 'Whiteboardtavle Lintex Boarder 455 x 605 mm', brandname: 'Lintex', metakeywords: 'lintex tavle',}, 
  {id: '1722851', name: 'Notesbog Bantex STO A4 lin grå', brandname: 'Bantex', metakeywords: ' A4 notesbøger', }, 
  {id: '1722895', name: 'Notesbog Bantex OSL A4 ulin blå', brandname: 'Bantex', metakeywords: 'A4 notesbøger', },
  {id: '1722873', name: 'Notesbog Bantex OSL B5 lin blå', brandname: 'Bantex', metakeywords: 'B5 notesbøger', },   
  {id: '1722862', name: 'Notesbog Bantex STO A4 ulin grå', brandname: 'Bantex', metakeywords: 'A4 notesbøger', },  
  {id: '1722840', name: 'Notesbog Bantex STO B5 lin grå', brandname: 'Bantex', metakeywords: 'B5 notesbøger', }, 
  {id: '1722884', name: 'Notesbog Bantex OSL A4 lin blå', brandname: 'Bantex', metakeywords: 'A4 notesbøger', }, 
  {id: '60024', name: 'Hånddesinfektion Hertels 70% 5 liter', brandname: 'Hertels', metakeywords: 'håndsprit', },  
  {id: '100288', name: 'BREVBAKKE TRANSIT 15667 HVID', brandname: 'Esselte', metakeywords: 'A4 brevbakke',}, 
  {id: '100039', name: 'Håndklædeark Tork H2 100288 Premium Soft 2-lags 21x110 ark', brandname: 'Tork', metakeywords: 'H2 håndklædeark',},
  ];

  constructor() {
    this.filteredProducts = this.productControl.valueChanges.pipe(
      map(option => (option ? this._filterProduct(option) : this.options.slice())),
    );
  }

  private _filterProduct(value: string): Products[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) >= 0 ||
    option.id.toLowerCase().indexOf(filterValue) >= 0 ||
    option.brandname.toLowerCase().indexOf(filterValue) >= 0 ||
    option.metakeywords.toLowerCase().includes(filterValue));
  }
}

