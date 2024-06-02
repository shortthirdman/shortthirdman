import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gh-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit {

  appTitle: string = 'Swetank Mohanty (shortthirdman)';

  constructor() {
  }

  ngOnInit(): void {
    console.warn('Method not implemented.');
  } 
}
