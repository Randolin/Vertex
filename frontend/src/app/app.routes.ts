import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ChartPageComponent } from './pages/chart-page/chart-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'chart', component: ChartPageComponent},
    {path: '**', component: NotFoundPageComponent},
];
