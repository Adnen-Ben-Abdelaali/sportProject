import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  addSoccerPlayerForm:FormGroup;

  player:any={}; 

  constructor(private formBuilder:FormBuilder) {}
    
  ngOnInit() {
    this.addSoccerPlayerForm=this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      dateOfBirth:[''],
      teeShirtNumber:[''],
      email:[''],
      position:[''],
      team:['']});
  }
  addSoccerPlayer(){
    var players=JSON.parse(localStorage.getItem("players")||"[]");
    var idPlayer=JSON.parse(localStorage.getItem("idPlayer")||"1");
    this.player.id=idPlayer;
    players.push(this.player);
    localStorage.setItem("players",JSON.stringify(players));
    localStorage.setItem("idPlayer",idPlayer+1);
  }

}
