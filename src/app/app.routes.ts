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
import { AuthGuard } from "./guards/auth.guard";
import { HomeComponent } from "./home/home.component";
import { LegalNoticeComponent } from "./legal-notice/legal-notice.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";
import { SearchComponent } from "./search/search.component";
import { SneakersComponent } from "./sneakers/sneakers.component";


const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'contact', component: ContactComponent}, 
    {path: 'legal-notice', component: LegalNoticeComponent}, 
    {path: 'faqs', component: FaqsComponent}, 
    {path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'profile/:id/update', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'profile/:id/delete', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'user/:id/collection', component: CollectionComponent, canActivate: [AuthGuard]},
    {path: 'user/:id/auction/create', component: AuctionCreationComponent, canActivate: [AuthGuard]},
    {path: 'user/:id/auctions', component: AuctionsComponent, canActivate: [AuthGuard]},
    {path: 'auction/:id/delete', component: AuctionComponent, canActivate: [AuthGuard]},
    {path: 'auction/:id', component: AuctionComponent, canActivate: [AuthGuard]},
    {path: 'auction/:id/payment', component: AuctionComponent, canActivate: [AuthGuard]},
    {path: 'favorite', component: FavoriteComponent, canActivate: [AuthGuard]},
    {path: 'sneakers/:id', component: SneakersComponent, canActivate: [AuthGuard]},
    {path: 'user/:id/sneakers/create', component: CreatedSneakersComponent, canActivate: [AuthGuard]},
    {path: 'sneakers/:id/update', component: SneakersComponent, canActivate: [AuthGuard]},
    {path: 'sneakers/:id/delete', component: SneakersComponent, canActivate: [AuthGuard]},
    {path: 'search', component: SearchComponent, canActivate: [AuthGuard]},
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: '**', redirectTo: ''}
    
]

export { routes };
