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
import {MaVendorServicesComponent} from './ma-vendor-services/ma-vendor-services.component';
import {MaVendorPageComponent} from './ma-vendor-page/ma-vendor-page.component';
import {MaProductPageComponent} from './ma-product-page/ma-product-page.component';
import {MaImageCardDetailedComponent} from './ma-image-card-detailed/ma-image-card-detailed.component';
import {MaFloatingContainerComponent} from './ma-floating-container/ma-floating-container.component';
import {MaSectionTabsComponent} from './ma-section-tabs/ma-section-tabs.component';
import {MaImageCardDescribedComponent} from './ma-image-card-described/ma-image-card-described.component';
import { MaProductSelectComponent } from './ma-product-select/ma-product-select.component';
import {MaProductDetailsComponent} from './ma-product-details/ma-product-details.component';
import {MaImageCardVerticleComponent} from './ma-image-card-verticle/ma-image-card-verticle.component';


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
  { path: 'carousel', component: MaCarouselComponent },
  { path: 'vendor-services', component: MaVendorServicesComponent },
  { path: 'vendor-page', component: MaVendorPageComponent },
  { path: 'product-page', component: MaProductPageComponent },
  { path: 'image-card-detailed', component: MaImageCardDetailedComponent },
  { path: 'floating-container', component: MaFloatingContainerComponent },
  { path: 'section-tabs', component: MaSectionTabsComponent },
  { path: 'image-card-described', component: MaImageCardDescribedComponent },
  { path: 'product-details', component: MaProductDetailsComponent },
  { path: 'product-select', component: MaProductSelectComponent },
  { path: 'image-card-verticle', component: MaImageCardVerticleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
