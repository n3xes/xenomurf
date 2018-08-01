import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './components/app/app.component';
import { AppErrorNotFoundComponent } from './components/app/errors/app-error-not-found/app-error-not-found.component';
import { AppFooterComponent } from './components/app/app-footer/app-footer.component';
import { AppHeaderComponent } from './components/app/app-header/app-header.component';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CrewComponent } from './components/crew/crew.component';
import { HomeComponent } from './components/home/home.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { VisualArtJobsComponent } from './components/jobs/visual-art-jobs/visual-art-jobs.component';
import { VisualArtJobAnimatorComponent } from './components/jobs/visual-art-jobs/visual-art-job-animator/visual-art-job-animator.component';
import { VisualArtJobArtistCharacterComponent } from './components/jobs/visual-art-jobs/visual-art-job-artist-character/visual-art-job-artist-character.component';
import { VisualArtJobArtistEnvironmentComponent } from './components/jobs/visual-art-jobs/visual-art-job-artist-environment/visual-art-job-artist-environment.component';

const routes: Routes = [{ 
    component: AboutComponent,
    path: 'about'
  }, { 
    component: ContactComponent,
    path: 'contact'
  }, { 
    component: CrewComponent,
    path: 'crew'
  }, { 
    component: HomeComponent,
    path: ''
  }, { 
    component: JobsComponent,
    path: 'jobs'
  }, { 
    component: VisualArtJobsComponent,
    path: 'jobs/visual-art'
  }, { 
    component: VisualArtJobAnimatorComponent,
    path: 'jobs/visual-art/animator'
  }, { 
    component: VisualArtJobArtistCharacterComponent,
    path: 'jobs/visual-art/character-artist'
  }, { 
    component: VisualArtJobArtistEnvironmentComponent,
    path: 'jobs/visual-art/envionment-artist'
  }, { 
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    AppErrorNotFoundComponent,
    AppFooterComponent,
    AppHeaderComponent,
    AboutComponent,
    ContactComponent,
    CrewComponent,
    HomeComponent,
    JobsComponent,
    VisualArtJobsComponent,
    VisualArtJobAnimatorComponent,
    VisualArtJobArtistCharacterComponent,
    VisualArtJobArtistEnvironmentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: false })
  ],
  providers: []
})

export class XenomurfModule { }
