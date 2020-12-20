import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ngapp';
  
  constructor() {
	
  }

  ngOnInit(): void {
	console.log("Font Awesome Free 5.15.0 by @fontawesome - https://fontawesome.com");
	console.log("Font Awesome Free 1.2.32 by @fontawesome - https://fontawesome.com");
  }
}
