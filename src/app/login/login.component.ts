import { Component } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login(id: number) {
    // Replace this with your actual login logic
    console.log('Login')
    const isLoggedIn = true; // Simulating a successful login
    if (isLoggedIn) {
      console.log('home page switching')
      this.router.navigateByUrl('/home');
    } else {
      console.log('Login failed. Please check your credentials.');
    }
  }

}