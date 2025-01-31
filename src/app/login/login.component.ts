import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // ✅ Import FormsModule to use ngModel
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  registerName: string = '';
  registerEmail: string = '';
  registerPassword: string = '';

  // Predefined Admin & Employee Credentials
  adminCredentials = { email: 'admin@example.com', password: 'admin123' };
  employeeCredentials = { email: 'employee@example.com', password: 'employee123' };

  constructor(private router: Router) {}

  /** ✅ Login Function **/
  login(): void {
    if (this.email === this.adminCredentials.email && this.password === this.adminCredentials.password) {
      alert('✅ Admin Login Successful');
      this.router.navigate(['/admin-dashboard']);
    } else if (this.email === this.employeeCredentials.email && this.password === this.employeeCredentials.password) {
      alert('✅ Employee Login Successful');
      this.router.navigate(['/employee-dashboard']);
    } else {
      alert('❌ Invalid Email or Password');
    }
  }

  /** ✅ Register Function **/
  register(): void {
    if (this.registerEmail && this.registerPassword) {
      alert(`🎉 Account Created for: ${this.registerEmail}`);
      // In real-world apps, send registration details to backend
    } else {
      alert('❌ Please fill all fields');
    }
  }

  /** ✅ Toggle Sliding Panel (Sign In/Sign Up) **/
  togglePanel(isSignUp: boolean): void {
    const container = document.getElementById('container');
    if (isSignUp) {
      container?.classList.add('right-panel-active');
    } else {
      container?.classList.remove('right-panel-active');
    }
  }
}
