import { Injectable } from '@angular/core';
import {Ta2} from './ta2.model';

@Injectable({
  providedIn: 'root'
})
export class Tab2Service {
  private tab2: Ta2[] = [
    {
      id: 'p1',
      title: 'BLACKPINK',
      imageUrl: 'https://cdn.discordapp.com/attachments/776261488541302808/784663555823501372/filename_3.jpg',
      category: 'Korean Dance Group'
    },
    {
      id: 'p2',
      title: 'The Beatles',
      imageUrl: 'https://cdn.discordapp.com/attachments/776261488541302808/784662582061170718/filename_2.jpg',
      category: 'Band Group'
    },
    {
      id: 'p3',
      title: 'JabbaWockeez',
      imageUrl: 'https://cdn.discordapp.com/attachments/776261488541302808/784664500594540544/filename_4.jpg',
      category: 'Dance Group'
    },
    {
      id: 'p4',
      title: 'Deddy Corbuzier',
      imageUrl: 'https://cdn.discordapp.com/attachments/776261488541302808/784661903276244992/filename_1.jpg',
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
