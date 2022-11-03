import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
	public profil = 'Mon profil';
	public contact = 'Contact';
	public faqs = 'FAQs';
	public legal = 'Mentions légales';

	public imgInstagramLogo = '';
	public imgFacebookLogo = '';
	public imgPinterestLogo = '';
}
