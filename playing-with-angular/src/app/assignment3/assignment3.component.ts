import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  display = false;
  count = 1;
  countArray = [];

  constructor() { }

  ngOnInit(): void {
  }

  getColor() {
    return 'green';
  }

  toggleDisplay(){
    if(this.display === false){
      this.display = true;
    }
    else {
      this.display = false;
    }
    this.countArray.push(this.count)
    this.count++;
  }
}
