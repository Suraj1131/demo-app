import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routingcomponen',
  templateUrl: './routingcomponen.component.html',
  styleUrls: ['./routingcomponen.component.css']
})
export class RoutingcomponenComponent {
  registrationForm: any;
  tagline: any;

  constructor(private appservice:AppService,private router: Router){

  }

  ngOnInit(){
    this.registrationForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phoneNumber: new FormControl(''),
      age: new FormControl(20),
      state: new FormControl(''),
      country: new FormControl(''),
      address: new FormControl(''),
      tags: new FormControl(''),
      newsletter: new FormControl(false),
    });
  }
  updateAge(): void {
    const slider: HTMLInputElement | null = document.getElementById('age-slider') as HTMLInputElement;
    const ageLabel: HTMLElement | null = document.getElementById('age-value');
    if (ageLabel && slider) {
      ageLabel.textContent = "Age: " + slider.value;
    }
  }


  onSubmit() {
    console.log(this.registrationForm.value);
    this.appservice.saveFormData(this.registrationForm.value).subscribe({
      next:(result)=>{
        console.log(result);

        this.router.navigate(['/profile']);
        
      }
    })
    
  }

  
  toggleTagline(sport: string) {
    if (this.tagline.includes(sport)) {
      this.tagline = this.tagline.replace(sport + ', ', '');
    } else {
      this.tagline += sport + ', ';
    }
  }  

  setupEventListeners(): void {
    document.getElementById("image")?.addEventListener("change", (e: Event) => {
      const preview: HTMLImageElement | null = document.getElementById('preview') as HTMLImageElement;
      if (preview) {
        preview.src = URL.createObjectURL((e.target as HTMLInputElement).files![0]);
      }
    });
  }

  onFileSelected(event:any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const imageUrl = e.target.result;
        displayImage(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  } 
}

function displayImage(imageUrl: string | ArrayBuffer) {
  const imgElement = document.getElementById("displayImg") as HTMLImageElement;
  imgElement.src = imageUrl.toString();
}









