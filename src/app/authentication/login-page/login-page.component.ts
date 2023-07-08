import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/services-auth';
import { AuthService } from '../auth.service';
import { AuthenticatedUser } from './authenticated.user.model';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted: boolean = false;
  public autenticatedUser:AuthenticatedUser;
  public error: any = '';
  constructor(
    private formBuilder : FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private authenticationService:AuthenticationService 
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username : ['',[Validators.required, Validators.email]],
      password : ['', Validators.required]
    });
  }

  get form(){
    return this.loginForm.controls;
  }
  //data: HttpResponse<any>
  Submit(){
   // this.router.navigate(['/dashboard']);
    this.authenticationService.login({body:{ 
      'password': this.loginForm.controls['password'].value ,
      'username':this.loginForm.controls['username'].value
      
    }}).subscribe(resp => {
      console.log(resp)
      localStorage.setItem('user2', JSON.stringify(resp));
       localStorage.setItem('token',resp.accessToken);
       this.autenticatedUser =   {
        id: resp.id,
      
        username: resp.username,
        fullName: resp.fullName,
      };
       localStorage.setItem('user', JSON.stringify(this.autenticatedUser));
       this.router.navigate(['/dashboard']);
    });
    
     /*.subscribe(res=> {
    
      this.router.navigate(['/dashboard']);
    },
    err => {
        console.log(err);
    })*/
    
  }

}
