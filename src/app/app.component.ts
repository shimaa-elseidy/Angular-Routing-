import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { NotFoundComponent } from "./not-found/not-found.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, FooterComponent, NavBarComponent, AboutComponent, ContactComponent, PortfolioComponent, NotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frameworkProject1';
}
