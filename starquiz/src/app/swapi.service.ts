import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  
  private _linkService = "https://swapi.co/api/";
  
  private blink = "https://www.googleapis.com/customsearch/v1?key=AIzaSyDuOgvZ2DFkPgE4iGfR8xMTttTZP3wZdAs&cx=002322993129652317083:ezvnc_qw2xc&q=";
  private elink = "&searchType=image&fileType=jpg&imgSize=small&alt=json";
  
  constructor(private http: HttpClient) { }
  
  findAllPeople(page){
    return this.http.get<any>( this._linkService+"people?page="+page);
  }
  
  async findSpecies(param){
    return await this.http.get<any>(param[0]).toPromise();
  }
  
  async getImages(param){
    return await this.http.get<any>(this.blink+param+this.elink).toPromise();
  }
  
  async getHomeworld(param){
    return await this.http.get<any>(param).toPromise();
  }
  
  async getFilms(param){
    return await this.http.get<any>(param).toPromise();
  }

  async getStarships(param){
    return await this.http.get<any>(param).toPromise();
  }

  async getVehicles(param){
    return await this.http.get<any>(param).toPromise();
  }

}