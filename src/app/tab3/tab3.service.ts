import { Injectable } from '@angular/core';
import {Ta3} from './ta3.model';

@Injectable({
  providedIn: 'root'
})
export class Tab3Service {
  private tab3: Ta3[] = [
    {
      id: 'p1',
      title: 'BLACKPINK',
      imageUrl: 'https://cdn.discordapp.com/attachments/776261488541302808/784663555823501372/filename_3.jpg',
      category: 'Korean Dance Group',
      aboutus: 'K-Wave. TRANS TV - Grup musik Korea saat ini tengah digandrungi oleh hampir seluruh remaja di dunia.'
    },
    {
      id: 'p2',
      title: 'The Beatles',
      imageUrl: 'https://cdn.discordapp.com/attachments/776261488541302808/784662582061170718/filename_2.jpg',
      category: 'Band Group',
      aboutus: 'Backstreet Boys (often abbreviated as BSB) are an American vocal group, formed in Orlando, Florida in 1993'
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
