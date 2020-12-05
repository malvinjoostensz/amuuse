import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  // darkMode: boolean = true;
  constructor(private renderer: Renderer2) {
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    // this.darkMode = prefersDark.matches;
  }

  onToggleColorTheme(event) {
    console.log(event.detail.checked);
    if (event.detail.checked){
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
    } else {
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
    }
  }

  ngOnInit() {
  }

  // cambio() {
  //   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  //   this.darkMode = !this.darkMode;
  //   document.body.classList.toggle('dark');
  // }

}
