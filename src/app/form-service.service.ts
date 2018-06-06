import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
	var1: String;
  

  constructor() { }
  emailsave(email){
this.var1 = email;
console.log("hi")
  }
  emailget(){
  	// debugger;
  	return this.var1;
  	// console.log("hello");
  }
}
