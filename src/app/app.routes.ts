import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = 
[
    {path:"" ,redirectTo:"home" ,pathMatch:"full",title:"home page"},
    {path:"home" , component:HomeComponent,title:"home page"},
    {path:"about" , component:AboutComponent,title:"about page"},
    {path:"portfolio" , component:PortfolioComponent,title:"portfolio page"},
    {path:"contact" , component:ContactComponent,title:"contact page"},
    {path:"**" , component:NotFoundComponent,title:"contact page"}
];
