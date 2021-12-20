import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  addNewTeamForm:FormGroup;

  newTeam:any={}; 

  constructor(private fBTeam:FormBuilder) {}
    
  ngOnInit() {
    this.addNewTeamForm=this.fBTeam.group({
      name:[''],
      stadium:[''],
      foundationDate:[''],
      email:[''],
     });
  }
  addNewTeamToDB(){
    var teams=JSON.parse(localStorage.getItem("teams")||"[]");
    var idNewTeam=JSON.parse(localStorage.getItem("idNewTeam")||"1");
    this.newTeam.id=idNewTeam;
    teams.push(this.newTeam);
    localStorage.setItem("teams",JSON.stringify(teams));
    localStorage.setItem("idNewTeam",idNewTeam+1);
  }


}
