import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { EmpDashboardComponent } from './components/empolyee/emp-dashboard/emp-dashboard.component';
import { MyProfileComponent } from './components/employee/modules/my-profile/my-profile.component';
import { AttendanceComponent } from './components/employee/modules/attendance/attendance.component';
import { PayrollComponent } from './components/employee/modules/payroll/payroll.component';
import { TasksComponent } from './components/employee/modules/tasks/tasks.component';
import { SettingsComponent } from './components/employee/modules/settings/settings.component';
import { UsersComponent } from './components/admin/modules/users/users.component';
import { ReportsComponent } from './components/admin/modules/reports/reports.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users', component: UsersComponent },
      { path: 'reports', component: ReportsComponent },
    ],
  },
  {
    path: 'employee-dashboard',
    component: EmpDashboardComponent,
    children: [
      { path: '', redirectTo: 'my-profile', pathMatch: 'full' },
      { path: 'my-profile', component: MyProfileComponent },
      { path: 'attendance', component: AttendanceComponent },
      { path: 'payroll', component: PayrollComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'settings', component: SettingsComponent },
    ],
  },
];
