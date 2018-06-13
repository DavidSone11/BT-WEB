import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { 
     
  }
  userOBJ = <any>{};    

  ngOnInit():void{
  }

  dologin(): void{
    localStorage.setItem('currentUser', JSON.stringify({ username: this.userOBJ.username}));
    this.router.navigate(['/dashboard']);

    //this.authService.login(this.userOBJ.username,this.userOBJ.password);
    
  }


}
