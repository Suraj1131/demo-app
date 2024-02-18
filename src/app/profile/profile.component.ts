import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  users: any;
  firstname: any;
  lastname: any;

  constructor(private AppService:AppService){

  }

  ngOnInit(){
    this.getDataFromAPI();
  }

  getDataFromAPI(){
    this.AppService.getDataFromAPI().subscribe({
      next:(result)=>{
        console.log(result);
        this.users=result.users;
        this.firstname=this.users[0].firstName
        this.lastname=this.users[0].lastName
        console.log(this.users[0].firstName);
        
        
      }
    })
  }


}
