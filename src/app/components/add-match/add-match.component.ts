import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  addMatchForm:FormGroup;
  match:any={};

  constructor(private formBuilderMatch:FormBuilder) { }

  ngOnInit()
  {

    this.addMatchForm=this.formBuilderMatch.group(
      {
        teamOne:[''],
        teamTwo:[''],
        scoreTeamOne:[''],
        scoreTeamTwo:[''],
      }
      );

  }

  addMatch()
  {
    var matchs=JSON.parse(localStorage.getItem("matchs")||"[]");
    var idMatchReturned=JSON.parse(localStorage.getItem("idMatchReturned")||"1");
    this.match.id=idMatchReturned;
    matchs.push(this.match);
    localStorage.setItem("matchs",JSON.stringify(matchs));
    localStorage.setItem("idMatchReturned",idMatchReturned+1);
  }

}
