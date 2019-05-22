import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slideCounter:number = 1;
  maxImageCount:number = 3;
  imageDiv:any;

  showSlide(n:number):void{

    // Get all the Image div for slide show
    this.imageDiv = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if(n > this.imageDiv.length)
    {
      this.slideCounter = 1;


    }

    if (n < 1)
    {
      this.slideCounter = this.imageDiv.length;


    }

    // hide all images first, so that new image div can be enabled
    for(let i = 0 ; i < this.imageDiv.length; i ++){
      (<HTMLElement>this.imageDiv[i]).style.display = 'none';

    }

    // show specific image div
    console.log('slide counter :'+ this.slideCounter);
    // subtract one from index as counter we started from 1
    (<HTMLElement>this.imageDiv[this.slideCounter-1]).style.display = 'block';

      for (let i = 0; i < dots.length; i++) {
        (<HTMLElement>dots[i]).className = dots[i].className.replace(" active", "");
    }
    (<HTMLElement>dots[this.slideCounter-1]).className += " active";



  }


  constructor() {



   }

  ngOnInit() {
    // set the first image on initialization of component

  //  this.showSlide(this.slideCounter);

  setInterval(() => {


    this.slideCounter += 1;
    this.showSlide(this.slideCounter);


  },2000);



  }

  plusSlides(y:number):void{

    this.slideCounter = this.slideCounter + y;
    this.showSlide(this.slideCounter);

  }

  currentSlide(x:number):void{
    console.log("clicked : "+ x);

    this.showSlide(this.slideCounter = x);
  }

}
