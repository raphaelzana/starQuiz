import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent, BotaoInfoContent, EndGameContent } from './quiz/quiz.component';
import { RoutingModule } from "./app.router";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BotaoPlayComponent, BotaoPlayContent } from './botao-play/botao-play.component';
import { SwapiService } from './swapi.service';
import { TimerComponent } from './timer/timer.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';
import { RankComponent } from './rank/rank.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent,
    BotaoPlayComponent,
    BotaoPlayContent,
    BotaoInfoContent,
    EndGameContent,
    TimerComponent,
    RankComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SwapiService],
  bootstrap: [AppComponent],
  entryComponents:[BotaoPlayContent,BotaoInfoContent,EndGameContent]
})
export class AppModule { }
