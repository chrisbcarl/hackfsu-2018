import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AlarmsComponent } from './components/alarms/alarms.component';
import { EventsComponent } from './components/events/events.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ConfigureComponent } from './components/configure/configure.component';
import { ChatComponent } from './components/chat/chat.component';

const appRoutes: Routes = [
  { path: 'home', component: SigninComponent, data: { title: 'MOM Home' } },
  { path: 'chat', component: ChatComponent, data: { title: 'MOM Chat' } },

  { path: 'alarms', component: AlarmsComponent, data: { title: 'MOM Alarms' } },
  { path: 'events', component: EventsComponent, data: { title: 'MOM Events' } },
  { path: 'projects', component: ProjectsComponent, data: { title: 'MOM Projects' } },
  { path: 'options', component: ConfigureComponent, data: { title: 'MOM Options' } },
  { path: '',
    redirectTo: '/chat',
    pathMatch: 'full'
  },
];


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomepageComponent,
    AlarmsComponent,
    EventsComponent,
    ProjectsComponent,
    ConfigureComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
