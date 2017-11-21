// ======= ./app/user/user.routes.ts =====
// Imports
// Deprecated import
// import { RouterConfig } from '@angular/router';
import { Routes } from '@angular/router';

import { UserComponent } from "./user.component";

// Route Configuration
export const userRoutes: Routes = [
  { path: 'users', component: UserComponent }//,
  //{ path: 'users/:id', component: UserDetailsComponent }
];