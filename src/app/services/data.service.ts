import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any
  currentAcno:any

  userDetails: any = {
    1000: { acno: 1000, username: "amal", password: 123, balance: 100000,transactions:[] },
    1001: { acno: 1001, username: "anu", password: 123, balance: 200000,transactions:[] },
    1002: { acno: 1002, username: "joyal", password: 123, balance: 150000,transactions:[] },
    1003: { acno: 1003, username: "anaga", password: 123, balance: 100000,transactions:[] },

  }

  constructor() { }

  register(acno:any,username:any,password:any){
    let userDetails=this.userDetails
    if(acno in userDetails){
      
      return false
    }
    else{
      userDetails[acno]={acno,username,password,balance:0}
      console.log(userDetails);

      return true
    }

  }
  login(acnum:any,psw:any){
    
    let userDetails=this.userDetails
    if(acnum in userDetails){
      
      if(psw==userDetails[acnum]['password']){
        this.currentUser=userDetails[acnum]['username']
        this.currentAcno=acnum
        // console.log(this.currentAcno);  //1
        
        return true
        
      }
    
      else{
        alert("incorrect password")

        return false
      }

    }
    else{
      alert("user does not exist/ incorrect account number")
      return false
    }
  }

  deposit(acnum:any,pswrd:any,amnt:any){
    let userDetails=this.userDetails
    var amount=parseInt(amnt)
    if(acnum in userDetails){
      if(pswrd==userDetails[acnum]['password']){
        userDetails[acnum]['balance']+=amount
        userDetails[acnum]['transactions'].push({type:'CREDIT',amount})
        // console.log(userDetails[acnum]['transactions']);
        
        return userDetails[acnum]['balance']
      }
      else{
        alert('Incorrect Password')
      }
    }
    else{
      alert('User does not exist')
      return false
    }

  }
  withdraw(acnum:any,pswrd:any,amnt:any){
    let userDetails=this.userDetails
    var amount=parseInt(amnt)
    if(acnum in userDetails){
      if(pswrd==userDetails[acnum]['password']){
        if(amount<=userDetails[acnum]['balance']){
        userDetails[acnum]['balance']-=amount
        userDetails[acnum]['transactions'].push({type:'DEBIT',amount})
        // console.log(userDetails[acnum]['transactions']);

        return userDetails[acnum]['balance']
      }
      else{
        alert("Insufficient Balance")
        return false
      }
    }
      else{
        alert('Incorrect Password')
      }
    }
    else{
      alert('User does not exist')
      return false
    }
  }

  getTransaction(acnum:any){
    return this.userDetails[acnum]['transactions']
  }
}

