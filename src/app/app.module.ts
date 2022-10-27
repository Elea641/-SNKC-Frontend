import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

import { HeaderNavComponent } from './header-nav/header-nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { ProfileComponent } from './profile/profile.component';
import { CollectionComponent } from './collection/collection.component';
import { AuctionsComponent } from './auctions/auctions.component';
import { AuctionComponent } from './auction/auction.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SneakersComponent } from './sneakers/sneakers.component';
import { SearchComponent } from './search/search.component';
import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { SneakersCardComponent } from './sneakers-card/sneakers-card.component';
import { LikeComponent } from './like/like.component';
import { FooterComponent } from './footer/footer.component';
import { FaqsComponent } from './faqs/faqs.component';
import { CreatedSneakersComponent } from './created-sneakers/created-sneakers.component';
import { AuctionCreationComponent } from './auction-creation/auction-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    LegalNoticeComponent,
    ProfileComponent,
    CollectionComponent,
    AuctionsComponent,
    AuctionComponent,
    FavoriteComponent,
    SneakersComponent,
    SearchComponent,
    HomeComponent,
    FaqsComponent,
    SneakersCardComponent,
    LikeComponent,
    AuctionCreationComponent,
    CreatedSneakersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ 
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    registerLocaleData(fr.default);
  }
}
