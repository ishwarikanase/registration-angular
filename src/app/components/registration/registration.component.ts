import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private httpService:HttpService) { }

  ngOnInit(): void {
    this.registrationForm=this.formBuilder.group({
      // id:[''],
      firstName:[''],
      lastName:[''],
      email:[''],
      phoneNumber:[''],
      address:[''],
      gender:['']
    });
  }


  submit(){
    console.log(this.registrationForm.value);
    if(this.registrationForm.valid){
      this.httpService.postServiceCall('new-student',this.registrationForm.value,false).subscribe(res=>{
        console.log(res);
      })
    }
  }
}
