import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule here
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {
  isSidebarCollapsed = false;

  newEmployee = {
    name: '',
    department: '',
    email: '',
    role: ''
  };

  employees = [
    { id: 1, name: 'John Doe', department: 'HR', email: 'john@example.com', role: 'Manager' },
    { id: 2, name: 'Jane Smith', department: 'IT', email: 'jane@example.com', role: 'Developer' },
  ];

  addEmployee(): void {
    const newId = this.employees.length + 1;
    this.employees.push({ id: newId, ...this.newEmployee });
    this.newEmployee = { name: '', department: '', email: '', role: '' }; // Reset the form
    alert('Employee added successfully.');
  }

  deleteEmployee(id: number): void {
    this.employees = this.employees.filter((employee) => employee.id !== id);
    alert(`Employee with ID ${id} deleted.`);
  }

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  logout(): void {
    window.location.href = '/login';
  }
}
