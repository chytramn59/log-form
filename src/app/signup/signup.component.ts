import { Component, OnInit } from '@angular/core';
 import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormServiceService} from '../form-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']

})
export class SignupComponent implements OnInit {
email: String;
values : any = [];
  constructor(private router :Router ,private FormServiceService : FormServiceService ) { }

  ngOnInit() {

  }
  onSubmit(form){
  	if(form.valid){
  		this.values.push({email : this.email})
  	}
  }
  save()
  {
  	this.FormServiceService.emailsave(this.email);
  }

}
