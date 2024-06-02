import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'gh-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [Title]
})
export class AppComponent implements OnInit {

  constructor(private title: Title) {
  }

  ngOnInit(): void {
    console.warn(`${this.title.getTitle()} - Method not implemented.`);
  }  
}
