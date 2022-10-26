import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{
  public profil: string = "Mon profil";
  public contact: string = "Contact";
  public faqs: string = "FAQs";
  public legal: string = "Mentions légales";
  
  public imgInstagramLogo: string ="";
  public imgFacebookLogo: string ="";
  public imgPinterestLogo: string ="";
  
  constructor() { }

}
