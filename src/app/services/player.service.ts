import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerUrl: string='http://localhost:3003/player';
  
  constructor(private httpClient:HttpClient) { }

  getAllPlayers(){
    return this.httpClient.get<{findedplayers:any}>(this.playerUrl);
}

getPlayerById(id){
  return this.httpClient.get(`${this.playerUrl}/${id}`);
}

deletePlayer(id){

  return this.httpClient.delete(`${this.playerUrl}/${id}`);
}


addPlayer(player){

  return this.httpClient.post(this.playerUrl,player);
}

editCourse(player){

  return this.httpClient.put(`${this.playerUrl}/${player.id}`,player);
}



}
