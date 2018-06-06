import { Component, OnInit } from '@angular/core';
import { FormServiceService} from '../form-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
	email: String;
	savedEmail: String;
  constructor(private router : Router ,private FormServiceService : FormServiceService) { }

  ngOnInit() {
  	this.savedEmail=this.FormServiceService.emailget();
  }

  submit() {
  	if(this.savedEmail == this.email ){
  		console.log('equal')
  	}else{
  		console.log('not')

  	}
  }

}
