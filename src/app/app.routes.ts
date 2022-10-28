import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { AuctionCreationComponent } from "./auction-creation/auction-creation.component";
import { AuctionComponent } from "./auction/auction.component";
import { AuctionsComponent } from "./auctions/auctions.component";
import { CollectionComponent } from "./collection/collection.component";
import { ContactComponent } from "./contact/contact.component";
import { CreatedSneakersComponent } from "./created-sneakers/created-sneakers.component";
import { FaqsComponent } from "./faqs/faqs.component";
import { FavoriteComponent } from "./favorite/favorite.component";
import { HomeComponent } from "./home/home.component";
import { LegalNoticeComponent } from "./legal-notice/legal-notice.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";
import { SearchComponent } from "./search/search.component";
import { SneakersComponent } from "./sneakers/sneakers.component";


const routes: Routes = [
    {path: 'login', component: LoginComponent}, 
    {path: 'register', component: RegisterComponent},
    {path: 'contact', component: ContactComponent}, 
    {path: 'legal-notice', component: LegalNoticeComponent}, 
    {path: 'faqs', component: FaqsComponent}, 
    {path: 'profile/:id', component: ProfileComponent},
    {path: 'profile/:id/update', component: ProfileComponent},
    {path: 'profile/:id/delete', component: ProfileComponent},
    {path: 'user/:id/collection', component: CollectionComponent},
    {path: 'user/:id/auctions', component: AuctionsComponent},
    {path: 'auction/:id', component: AuctionComponent},
    {path: ':id/auction/create', component: AuctionCreationComponent},
    {path: 'auction/:id/delete', component: AuctionComponent},
    {path: 'auction/:id/payment', component: AuctionComponent},
    {path: 'favorite', component: FavoriteComponent},
    {path: 'sneakers/:id', component: SneakersComponent},
    {path: 'user/:id/sneakers/create', component: CreatedSneakersComponent},
    {path: 'sneakers/:id/update', component: SneakersComponent},
    {path: 'sneakers/:id/delete', component: SneakersComponent},
    {path: 'search', component: SearchComponent},
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: '**', redirectTo: ''}
    
]

export { routes };
