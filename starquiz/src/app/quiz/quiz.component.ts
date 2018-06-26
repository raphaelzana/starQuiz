import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { SwapiService } from '../swapi.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl:'./botao-info-content.html',
  styleUrls: ['./botao-info-content.scss']
})
export class BotaoInfoContent {
  @Input() person;
  constructor(public activeModal: NgbActiveModal) {
  }
}

@Component({
  selector: 'ngbd-modal-content',
  templateUrl:'./end-game-content.html',
  styleUrls: ['./end-game-content.scss']
})
export class EndGameContent {
  @Input() point;
  constructor(public activeModal: NgbActiveModal, private router : Router) {
  }

  rank:any = {};
  ranking = [];

  gravar(point){


    this.rank.point = this.point;

    this.ranking = JSON.parse(localStorage.getItem('scores')) || [];
    if(this.ranking.length == 0) {
      this.ranking.push(this.rank);
    }else if(this.ranking[0].point < this.rank.point){
      this.ranking.unshift(this.rank)
    }else{
      let index = 0 ;
      debugger;
      while(this.ranking[index] && this.rank.point < this.ranking[index].point){
        index++;
      }
      let inicioArray = this.ranking.slice(0,index);
      let fimArray = this.ranking.slice(index,this.ranking.length);
      inicioArray.push(this.rank);
      this.ranking = inicioArray.concat(fimArray);
    }
    localStorage.setItem("scores",JSON.stringify(this.ranking));

    this.router.navigate(['']);
    this.activeModal.close();
  }

  playAgain(){
    this.router.navigate(['']);
    this.activeModal.close();
  }

}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  @Input('person') person;
  @Input('point') point;

  characterList: any[];
  topRow: any[];
  bottomRow: any[];
  previous;
  next;
  rank:any;
  block = false;
  points = 0;
  awnsersc: any[] = [];
  awnserse: any[] = [];
  specie;
  bloq;

  constructor(private modalService: NgbModal,private swapiServer : SwapiService) { }
  
  info(person) {
    this.person = person;
    this.person.infed = true;
    const modalRef = this.modalService.open(BotaoInfoContent,{centered: true});
    modalRef.componentInstance.person = person;
  }

  endGame(){
    this.bloq = true;
    const modalRef = this.modalService.open(EndGameContent,{backdrop:'static',centered: true});
    modalRef.componentInstance.point = this.points;
  }

 
  
  ngOnInit() {
    this.findAll(1);
  }
  
  private findAll(page){
    this.swapiServer.findAllPeople(page).subscribe((data) => {
      this.characterList = data.results;
      this.jaFoi();
      this.characterList.forEach((item)=>{
        this.swapiServer.findSpecies(item.species).then((data) => {
          item.species = data.name;
         }).catch(error => {}) ;
        this.swapiServer.getImages(item.name).then((data)=>{
          item.image = data.items[0].image.thumbnailLink;
        }).catch(error => {});
        this.swapiServer.getHomeworld(item.homeworld).then((data)=> {
          item.homeworld = data.name;
        }).catch(error => {});
        item.filmName = [];
        item.films.forEach((param)=>{
          this.swapiServer.getFilms(param).then((data)=> {
            item.filmName.push(data.title);
          }).catch(error => {});
        });
        item.films = item.filmName;

        item.starName = []; 
        item.starships.forEach((param)=>{
          this.swapiServer.getStarships(param).then((data)=>{
            item.starName.push(data.name);
          }).catch(error=>{});
        });
        item.starships = item.starName;

        item.vehiclesName = []; 
        item.vehicles.forEach((param)=>{
          this.swapiServer.getStarships(param).then((data)=>{
            item.vehiclesName.push(data.name);
          }).catch(error=>{});
        });
        item.vehicles = item.vehiclesName;

      })
      this.topRow = this.characterList.slice(0,5);
      this.bottomRow = this.characterList.slice(5,10);
      this.previous = data.previous;
      this.next = data.next;
    })
  }

  private jaFoi(){
    this.characterList.forEach(person =>{
      this.awnsersc.forEach(item =>{
        if(item.name === person.name){
          this.blockPersonCard(person,item);
        }
      })
    })
    this.characterList.forEach(person =>{
      this.awnserse.forEach(item =>{
        if(item.name === person.name){
          this.blockPersonCarde(person,item);
        }
      })
    })
  }
  
  private blockPersonCarde(person,item){
    person.errou = true;
    person.resp = item.resp;
  }
  
  private blockPersonCard(person,item){
    person.blockConfirm = true;
    person.resp = item.resp;
  }
  
  private changePages(page){
    this.findAll(page.charAt(page.length - 1));
  }
  
  
  private confirm(person){
    
    if(person.name.toUpperCase() === person.resp.toUpperCase()){
      person.blockConfirm = true;
      this.awnsersc.push(person);
      if(person.infed){
        this.points += 5;
      }else{
        this.points += 10;
      }
    }else{
      person.errou = true;
      this.awnserse.push(person);
    }
  }
  
  // private endGame(){
  //   swal({
  //     title:"Congratulations !",
  //     html:this.points
  //   })
  //   this.block = true;
  // }

}