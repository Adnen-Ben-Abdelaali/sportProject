import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit 
{

      matches:any;
      constructor(private matchService : MatchService) { }

      ngOnInit() 
      {

        this.matchService.getAllMatchs().subscribe(
          (data)=>
          {
            console.log('Here Data is',data);
            this.matches = data.findedmatches;
          });
      }
       
}
