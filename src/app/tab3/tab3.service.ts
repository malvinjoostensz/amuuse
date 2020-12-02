import { Injectable } from '@angular/core';
import {Ta3} from './ta3.model';

@Injectable({
  providedIn: 'root'
})
export class Tab3Service {
  private tab3: Ta3[] = [
    {
      id: 'p1',
      title: 'K-wave',
      imageUrl: 'https://international-home.net/wp-content/uploads/2020/01/146031.png',
      category: 'Korean Dance Group'
    },
    {
      id: 'p2',
      title: 'Backstreet Guys',
      imageUrl: 'https://icons.iconarchive.com/icons/webalys/kameleon.pics/512/Man-16-icon.png',
      category: 'Band Group'
    }
  ];
  constructor() { }

  getAllTab3(){
    return [...this.tab3];
  }

  getTab3(ta3Id: string) {
    return {...this.tab3.find(ta3 => {
        return ta3.id === ta3Id;
      })};
  }
}
