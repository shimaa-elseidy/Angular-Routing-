import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  isClicked:boolean=false;
  imgSrc:string=""
  open(mainImage:string)
  {  
    this.isClicked=true
    this.imgSrc="../../assets" + mainImage
  }
  close()
  {
    this.isClicked=false
  }
}
