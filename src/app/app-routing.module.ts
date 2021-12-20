import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { BlogLinkComponent } from './components/blog-link/blog-link.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { NextMatchComponent } from './components/next-match/next-match.component';
import { PlayersComponent } from './components/players/players.component';
import { SignupComponent } from './components/signup/signup.component';
import { StarPlayersComponent } from './components/star-players/star-players.component';
import { TeamsResultComponent } from './components/teams-result/teams-result.component';
import { VideosComponent } from './components/videos/videos.component';


const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'add-team', component:AddTeamComponent},
  {path:'add-player', component:AddPlayerComponent},
  {path:'add-match',component:AddMatchComponent},
  {path:'videos',component:VideosComponent},
  {path:'blog',component:BlogComponent},
  {path:'matches',component:MatchesComponent},
  {path:'next-match',component:NextMatchComponent},
  {path:'players',component:PlayersComponent},
  {path:'blog-link',component:BlogLinkComponent},
  {path:'contact',component:ContactComponent},
  {path:'admin',component:AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
