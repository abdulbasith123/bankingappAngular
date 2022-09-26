import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  aim='your perfect banking partner'
  acnt="enter acnumber"
  acno=''
  pass=''
  userDetails:any={
    1000:{acno:1000,username:"amal",password:123,balance:100000},
    1001:{acno:1001,username:"anu",password:123,balance:200000},
    1002:{acno:1002,username:"joyal",password:123,balance:150000},
    1003:{acno:1003,username:"anaga",password:123,balance:100000},



  }

  constructor() { }

  ngOnInit(): void {
  }

  // login(){
  //   var acnum=this.acno
  //   var psw=this.pass
  //   let userDetails=this.userDetails
  //   if(acnum in userDetails){
      
  //     if(psw==userDetails[acnum]['password']){
  //       alert("login success")
  //     }
  //     else{
  //       alert("incorrect password")
  //     }

  //   }
  //   else{
  //     alert("user dooes not exist")
  //   }
  // }

  login(a:any,b:any){

    // console.log(a.value);
    // console.log(b.value);
    
    
    var acnum=a.value
    var psw=b.value
    let userDetails=this.userDetails
    if(acnum in userDetails){
      
      if(psw==userDetails[acnum]['password']){
        alert("login success")
      }
      else{
        alert("incorrect password")
      }

    }
    else{
      alert("user dooes not exist")
    }
  }

    


}
