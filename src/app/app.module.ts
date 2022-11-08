import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthInterceptor } from './interceptors/auth-interceptor';

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
import { AuctionCardComponent } from './auction-card/auction-card.component';
import { UpdateSneakersComponent } from './update-sneakers/update-sneakers.component';
import { DeletSneakersComponent } from './delet-sneakers/delet-sneakers.component';

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
    CreatedSneakersComponent,
    AuctionCardComponent,
    UpdateSneakersComponent,
    DeletSneakersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [ 
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    registerLocaleData(fr.default);
  }
}
