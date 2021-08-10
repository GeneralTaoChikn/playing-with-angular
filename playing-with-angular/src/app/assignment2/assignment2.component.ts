import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {

  serverId: number = 10;
  serverStatus: string = 'offline';
  allowSave = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  userName = '';
  serverCreated = false;


  getServerStatus() {
    return this.serverStatus;
  }

  constructor() {
    setTimeout(()=> {
      this.allowSave = true;
    },2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
    this.serverCreated = true;
  }
  onUpdaterServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;

  }
  clearName(){
    this.userName = '';
  }

}
