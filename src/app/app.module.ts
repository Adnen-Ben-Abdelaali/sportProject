import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { MatchesComponent } from './components/matches/matches.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { TeamsResultComponent } from './components/teams-result/teams-result.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NextMatchComponent } from './components/next-match/next-match.component';
import { PlayersComponent } from './components/players/players.component';
import { StarPlayersComponent } from './components/star-players/star-players.component';
import { BlogLinkComponent } from './components/blog-link/blog-link.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { MatchPrototypeComponent } from './components/match-prototype/match-prototype.component';
import { AdminMatchesComponent } from './components/admin-matches/admin-matches.component';
import { AdminPlayersComponent } from './components/admin-players/admin-players.component';
import { AdminTeamsComponent } from './components/admin-teams/admin-teams.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AddPlayerComponent,
    AddTeamComponent,
    AddMatchComponent,
    MatchesComponent,
    ContactComponent,
    AboutComponent,
    AdminComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LatestNewsComponent,
    TeamsResultComponent,
    VideosComponent,
    BlogComponent,
    NextMatchComponent,
    PlayersComponent,
    StarPlayersComponent,
    BlogLinkComponent,
    MatchPrototypeComponent,
    AdminMatchesComponent,
    AdminPlayersComponent,
    AdminTeamsComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
