import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginData = { username: '', password: '' };
  loginMessage: string = '';

  users = [
    {username: "aaa", password: "aaa"},
    {username: "bbb", password: "bbb"},
    {username: "ccc", password: "ccc"}
  ]



  constructor(private router: Router) {}


  onSubmit() {
    const user = this.users.find(
      u => u.username === this.loginData.username && u.password === this.loginData.password
    );

    if (user) {
      this.loginMessage = 'Login successful!';
      this.router.navigate(['/account']);
      
    } else {
      this.loginMessage = 'Invalid username or password';
      
    }
  }

}
