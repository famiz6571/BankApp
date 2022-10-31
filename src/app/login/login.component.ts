import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your Perfect Banking Partner";

  accounts="Enter your account number here";
  acno="";
  pswd="";

  acnoChange(event:any){
    this.acno=event.target.value;
    console.log(this.acno);
    
  }

  pswdChange(event:any){
    this.pswd=event.target.value;
    console.log(this.pswd);
  }

  login(){
    //alert('login clicked')
    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.userDetails;

    if (acno in userDetails){
      if (pswd==userDetails[acno]['password']){
        alert("login succesfull");
      }
      else
      {
        alert("invalid password");
      }
    }
    else
    {
      alert("invalid user details")
    }
  }

  userDetails:any={
    1000:{acno:1000,username:'jees',password:1000,balance:1000},
    1001:{acno:1000,username:'amal',password:1002,balance:1000},
    1002:{acno:1000,username:'sarath',password:1003,balance:1000}
  }
  constructor() { }

  ngOnInit(): void {
  }

}
