import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router) { }

  image;

  ngOnInit() {
    this.trocarImagem();
  }

  play(){
    this.router.navigate(['quiz']);
  }

  trocarImagem(){
    setInterval(()=>{
      this.image = "../../assets/img/"+this.sortearNumeroDaImagem()+".png";
    },1000);

  }

  sortearNumeroDaImagem(){
    let current = 0;
    if(this.image){
      current = this.image.charAt(17);
    }
    let sortNumber = 0;
    do{
      sortNumber = Math.floor(Math.random() * 10) + 1 ;
    }while(sortNumber == current);
    return sortNumber;
  }

}
