import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Components/material/material.module';
import { WritingComponent } from './Components/writing/writing.component';
import { CsprojectsComponent } from './Components/csprojects/csprojects.component';
import { CsskillsComponent } from './Components/csskills/csskills.component';
import { AboutComponent } from './Components/about/about.component';
import { TheConvergenceComponent } from './Components/stories/the-convergence/the-convergence.component';
import { TheRoadWithNoTurnsComponent } from './Components/stories/the-road-with-no-turns/the-road-with-no-turns.component';
import { OnlyStayWithMeForSurvivalComponent } from './Components/stories/only-stay-with-me-for-survival/only-stay-with-me-for-survival.component';
import { RupertsBodyComponent } from './Components/stories/ruperts-body/ruperts-body.component';
import { ArtComponent } from './Components/art/art.component';

// import * as dotenv from 'dotenv';
// dotenv.config();

//import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    WritingComponent,
    CsprojectsComponent,
    CsskillsComponent,
    AboutComponent,
    TheConvergenceComponent,
    TheRoadWithNoTurnsComponent,
    OnlyStayWithMeForSurvivalComponent,
    RupertsBodyComponent,
    ArtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCarouselModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
