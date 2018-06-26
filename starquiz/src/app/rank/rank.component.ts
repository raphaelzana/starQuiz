import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss']
})
export class RankComponent implements OnInit {

  ranking = JSON.parse(localStorage.getItem('scores')) || [];

  constructor(private router : Router) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['']);
  }

}
