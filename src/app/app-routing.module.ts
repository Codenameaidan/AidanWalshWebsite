import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { CsprojectsComponent } from './Components/csprojects/csprojects.component';
import { CsskillsComponent } from './Components/csskills/csskills.component';
import { HomeComponent } from './Components/home/home.component';
import { OnlyStayWithMeForSurvivalComponent } from './Components/stories/only-stay-with-me-for-survival/only-stay-with-me-for-survival.component';
import { TheConvergenceComponent } from './Components/stories/the-convergence/the-convergence.component';
import { TheRoadWithNoTurnsComponent } from './Components/stories/the-road-with-no-turns/the-road-with-no-turns.component';
import { WritingComponent } from './Components/writing/writing.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'writing', component: WritingComponent },
  { path: 'about', component: AboutComponent },

  { path: 'cs/projects', component: CsprojectsComponent },
  { path: 'cs/skills', component: CsskillsComponent },

  { path: 'stories/theconvergence', component: TheConvergenceComponent },
  { path: 'stories/theroadwithnoturns', component: TheRoadWithNoTurnsComponent },
  { path: 'stories/onlystaywithmeforsurvival', component: OnlyStayWithMeForSurvivalComponent },

  

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
