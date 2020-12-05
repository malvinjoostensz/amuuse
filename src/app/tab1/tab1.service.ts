import { Injectable } from '@angular/core';
import {Ta1} from './ta1.model';

@Injectable({
  providedIn: 'root'
})
export class Tab1Service {
  private tab1: Ta1[] = [
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

  getAllTab1(){
    return [...this.tab1];
  }

  getTab1(ta1Id: string) {
    return {...this.tab1.find(ta1 => {
        return ta1.id === ta1Id;
      })};
  }
}
