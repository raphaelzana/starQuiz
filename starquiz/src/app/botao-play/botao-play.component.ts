import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'botao-play',
  templateUrl: './botao-play.component.html',
  styleUrls: ['./botao-play.component.scss']
})
export class BotaoPlayComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(BotaoPlayContent,{backdrop:'static', centered: true});
  }


  ngOnInit() {
  }

}

@Component({
  selector: 'ngbd-modal-content',
  templateUrl:'./botao-play-content.html',
  styleUrls: ['./botao-play-content.scss']
})
export class BotaoPlayContent {
  constructor(public activeModal: NgbActiveModal,private router : Router) {
  }

  goQuiz(){
    this.router.navigate(['quiz']);
    this.activeModal.close();
  }

}

