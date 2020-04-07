import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material/material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaRoutingProjectComponent } from './ma-routing-project/ma-routing-project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaTopHeaderComponent } from './ma-top-header/ma-top-header.component';
import { MaStyleGuideComponent } from './ma-style-guide/ma-style-guide.component';
import { MaInnerHeaderComponent } from './ma-inner-header/ma-inner-header.component';
import { MaImageCardFullComponent } from './ma-image-card-full/ma-image-card-full.component';
import { MaTopCategoriesComponent } from './ma-top-categories/ma-top-categories.component';
import { MaImageCardPrimaryComponent } from './ma-image-card-primary/ma-image-card-primary.component';
import { MaLandingPageComponent } from './ma-landing-page/ma-landing-page.component';
import { MaAppDownloadComponent } from './ma-app-download/ma-app-download.component';
import { MaImageCardSecondaryComponent } from './ma-image-card-secondary/ma-image-card-secondary.component';
import { MaFooterComponent } from './ma-footer/ma-footer.component';
import { MaCarouselComponent } from './ma-carousel/ma-carousel.component';
import { MaVendorServicesComponent } from './ma-vendor-services/ma-vendor-services.component';
import { MaVendorPageComponent } from './ma-vendor-page/ma-vendor-page.component';
import { MaImageCardDetailedComponent } from './ma-image-card-detailed/ma-image-card-detailed.component';
import { MaFloatingContainerComponent } from './ma-floating-container/ma-floating-container.component';
import { MaSectionTabsComponent } from './ma-section-tabs/ma-section-tabs.component';
import { MaImageCardDescribedComponent } from './ma-image-card-described/ma-image-card-described.component';

@NgModule({
  declarations: [
    AppComponent,
    MaRoutingProjectComponent,
    MaTopHeaderComponent,
    MaStyleGuideComponent,
    MaInnerHeaderComponent,
    MaImageCardFullComponent,
    MaTopCategoriesComponent,
    MaImageCardPrimaryComponent,
    MaLandingPageComponent,
    MaAppDownloadComponent,
    MaImageCardSecondaryComponent,
    MaFooterComponent,
    MaCarouselComponent,
    MaVendorServicesComponent,
    MaVendorPageComponent,
    MaImageCardDetailedComponent,
    MaFloatingContainerComponent,
    MaSectionTabsComponent,
    MaImageCardDescribedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
