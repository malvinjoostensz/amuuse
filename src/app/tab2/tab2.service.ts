import { Injectable } from '@angular/core';
import {Ta2} from './ta2.model';

@Injectable({
  providedIn: 'root'
})
export class Tab2Service {
  private tab2: Ta2[] = [
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
    },
    {
      id: 'p3',
      title: 'Gfriend',
      imageUrl: 'https://rwjms.rutgers.edu/images/Staff%20Council/General%20Images/who%20we%20are2.png',
      category: 'Dance Group'
    },
    {
      id: 'p4',
      title: 'Houdini',
      imageUrl: 'https://www.pngrepo.com/png/241611/180/magician.png',
      category: 'Magician'
    }
  ];
  constructor() { }

  getAllTab2(){
    return [...this.tab2];
  }

  getTab2(ta2Id: string) {
    return {...this.tab2.find(ta2 => {
        return ta2.id === ta2Id;
      })};
  }
}
