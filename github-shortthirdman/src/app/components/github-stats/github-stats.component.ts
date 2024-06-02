import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gh-github-stats',
  templateUrl: './github-stats.component.html',
  styleUrl: './github-stats.component.scss'
})
export class GithubStatsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    console.info('GitHub Stats');
  }
}
