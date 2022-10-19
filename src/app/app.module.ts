import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
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
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
