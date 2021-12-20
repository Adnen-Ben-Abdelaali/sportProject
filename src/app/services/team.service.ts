import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamUrl: string='http://localhost:3003/team';
  constructor(private httpClient:HttpClient) { }

  getAllTeams(){
    return this.httpClient.get<{findedTeams:any}>(this.teamUrl);
}

getTeamById(id){
  return this.httpClient.get(`${this.teamUrl}/${id}`);
}

deleteTeam(id){

  return this.httpClient.delete(`${this.teamUrl}/${id}`);
}


addTeam(team){
  return this.httpClient.post(this.teamUrl,team);



}

editCourse(team){

  return this.httpClient.put(`${this.teamUrl}/${team.id}`,team);
}


}
  