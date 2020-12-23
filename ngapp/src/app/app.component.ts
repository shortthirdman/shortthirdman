import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { Title } from '@angular/platform-browser';

// import { Loader } from '@googlemaps/js-api-loader';
import { Loader, LoaderOptions } from 'google-maps';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Title]
})
export class AppComponent implements OnInit {
 
  constructor(private title: Title) {
	this.title.setTitle('Swetank Mohanty | iPortfolio | About');
  }

  ngOnInit(): void {
	console.log("Font Awesome Free 5.15.0 by @fontawesome - https://fontawesome.com");
	// this.loader = = new Loader({
		// apiKey: environment.googleMapsApiKey,
		// version: "weekly",
		// libraries: ["places"]
	// });
	// this.loader.load()
	  // .then(() => {
		// new google.maps.Map(document.getElementById("map"), {});
	  // })
	  // .catch(e => {
	  // });
  }
  
  private async loadGoogleMaps() {
	const options: LoaderOptions = {};
	const loader = new Loader(environment.googleMapsApiKey, options);
	const google = await loader.load();
	const map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 8,
	});
  }
}
