import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
[x: string]: any;
  users: any;
  firstname: any;
  lastname: any;
  email: any;
  phoneNumber: any;
  age: any;
  state: any;
  country: any;
  address: any;
  tags: any;
  newsletter: any;

  constructor(private AppService:AppService){}

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
        this.email=this.users[0].email
        this.phoneNumber=this.users[0].phoneNumber
        this.age=this.users[0].age
        this.state=this.users[0].state
        this.country=this.users[0].country
        this.address=this.users[0].address
        this.tags=this.users[0].tags
        this.newsletter=this.users[0].newsletter
        console.log(this.users[0].firstName);
        
        
      }
    })
  }


}
