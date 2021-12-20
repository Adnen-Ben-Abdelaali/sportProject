import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  matchUrl: string='http://localhost:3003/match';
  
  constructor(private httpClient:HttpClient) { }

getAllMatchs()
{
    return this.httpClient.get<{findedmatches:any}>(this.matchUrl);
}

getMatchById(id)
{
  return this.httpClient.get(`${this.matchUrl}/${id}`);
}

deleteMatch(id)
{

  return this.httpClient.delete(`${this.matchUrl}/${id}`);
}

addMatch(match)
{
  return this.httpClient.post(this.matchUrl,match);
}

editMatch(match)
{
  return this.httpClient.put(`${this.matchUrl}/${match.id}`,match);
}

  
}
