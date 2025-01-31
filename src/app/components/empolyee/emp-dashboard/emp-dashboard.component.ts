import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-dashboard',
  imports: [CommonModule],
  templateUrl: './emp-dashboard.component.html',
  styleUrl: './emp-dashboard.component.css'
})
export class EmpDashboardComponent {
  isSidebarCollapsed = false;

  attendanceRecords = [
    { date: '2025-01-01', status: 'Present' },
    { date: '2025-01-02', status: 'Absent' },
  ];

  payrollRecords = [
    { month: 'January', salary: '5000$', bonus: '300$', netPay: '5300$' },
    { month: 'February', salary: '5000$', bonus: '400$', netPay: '5400$' },
  ];

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  logout(): void {
    window.location.href = '/login';
  }

}
