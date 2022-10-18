import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private http: HttpClient) {
  }
 
}

// Exemple de post et get sur json server

// const user: User = new User(3, '', '', '', '', '','', '', 0,'', new Date(), new Date());
    // this.http.post('http://localhost:3000/users', user).subscribe(res => {
    //   console.log(JSON.stringify(res));
    // });

    // this.http.get('http://localhost:3000/users?id=2').subscribe(res => {
    //   console.log(JSON.stringify(res));
    // })
    // console.log(JSON.stringify(user));
