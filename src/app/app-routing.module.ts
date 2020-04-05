import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MaStyleGuideComponent} from './ma-style-guide/ma-style-guide.component';
import {MaTopHeaderComponent} from './ma-top-header/ma-top-header.component';
import {MaInnerHeaderComponent} from './ma-inner-header/ma-inner-header.component';
import {MaTopCategoriesComponent} from './ma-top-categories/ma-top-categories.component';
import {MaImageCardFullComponent} from './ma-image-card-full/ma-image-card-full.component';
import {MaImageCardPrimaryComponent} from './ma-image-card-primary/ma-image-card-primary.component';
import {MaLandingPageComponent} from './ma-landing-page/ma-landing-page.component';
import {MaAppDownloadComponent} from './ma-app-download/ma-app-download.component';
import {MaImageCardSecondaryComponent} from './ma-image-card-secondary/ma-image-card-secondary.component';
import {MaFooterComponent} from './ma-footer/ma-footer.component';
import {MaCarouselComponent} from './ma-carousel/ma-carousel.component';


const routes: Routes = [
  { path: 'style-guide', component: MaStyleGuideComponent },
  { path: 'top-header', component: MaTopHeaderComponent },
  { path: 'inner-header', component: MaInnerHeaderComponent },
  { path: 'top-categories', component: MaTopCategoriesComponent },
  { path: 'image-card-full', component: MaImageCardFullComponent },
  { path: 'image-card-primary', component: MaImageCardPrimaryComponent },
  { path: 'image-card-secondary', component: MaImageCardSecondaryComponent },
  { path: 'landing-page', component: MaLandingPageComponent },
  { path: 'download-component', component: MaAppDownloadComponent },
  { path: 'footer', component: MaFooterComponent },
  { path: 'carousel', component: MaCarouselComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
