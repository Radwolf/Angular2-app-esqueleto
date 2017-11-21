// ====== ./app/app.routes.ts ======

// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from "./home/home.component";

import { userRoutes } from "./user/user.routes";

// Route Configuration
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'hello', component: HelloComponent },
    ...userRoutes
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);