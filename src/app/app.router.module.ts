import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';

import { DashboardComponent } from "./dashboard/dashboard.component";
import {HomeComponent  } from "./home/home.component";
import { AuthGuard } from './app.authGuard';

export const routeConfig: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
        children: [
            { path: 'about', component: AboutComponent },
            { path: 'home', component: HomeComponent }

        ]
    },
    { path: '**', redirectTo: '/dashboard' },
]

export const routes: ModuleWithProviders = RouterModule.forRoot(routeConfig);

