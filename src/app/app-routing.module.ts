import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MaStyleGuideComponent} from './ma-style-guide/ma-style-guide.component';
import {SearchComponent} from './search/search.component';
import { SetAdvancedSearchComponent } from './set-advanced-search/set-advanced-search.component';


const routes: Routes = [
  { path: 'style-guide', component: MaStyleGuideComponent },
  { path: 'search', component: SearchComponent },
  { path: 'set-advanced-search', component: SetAdvancedSearchComponent },

  { path: '', redirectTo: '/sign-in-page', pathMatch: 'full' },
  { path: '**', redirectTo: '/sign-in-page', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
