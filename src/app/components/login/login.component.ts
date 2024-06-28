import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servies/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  logInForm!:FormGroup;

  constructor(private fb:FormBuilder,private auth:AuthService){
    this.logInForm = this.fb.group({
      username:['',Validators.required],
      Password:['',Validators.required]
    }) 
  }
  ngOnInit(): void {
    
  }
  loginSubmit( ){
    const{ username,Password} = this.logInForm.value;    
    if(this.logInForm.valid){

       this.auth.UserLogin(username,Password).subscribe(res=>{
     
        },error=>{
        console.error('Login error:', error);
       })
    }
     
  }
 

}
 

