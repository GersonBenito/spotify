import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment as env } from 'src/environments/environment';
import { saveLocalStorage } from 'src/helpers/helpers';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-access-with-social-media',
  templateUrl: './access-with-social-media.component.html',
  styleUrls: ['./access-with-social-media.component.css']
})
export class AccessWithSocialMediaComponent implements OnInit {

  public credentials: object | any;

  constructor(
    private _authenticationService: AuthenticationService,
    private aRoute: ActivatedRoute,
    private router: Router,
    private _toastrService: ToastrService
  ) { 
    this.getActiveRoute();
  }

  ngOnInit(): void {}

  authorization(){
    this._authenticationService.authorization().subscribe({
      next: (response) =>{
        console.log('response', response);
        window.location.replace(response) // replace url current for url spotify autoization
        this.getActiveRoute();
        
      },
      error: (error) =>{
        console.log('error', error);
        
      }
    });
  }

  getActiveRoute(){
    this.credentials = this.aRoute.snapshot.queryParams;
    console.log(this.credentials.code);
    if(this.credentials.code){
      this.getToken(this.credentials.code);
    }
  }

  getToken(code: string){
    this._authenticationService.getToken(code).subscribe({
      next: response =>{
        console.log('response', response);
        this._toastrService.success('User login success', 'Success!')
        saveLocalStorage('access_token', response.access_token);
        saveLocalStorage('refresh_token', response.refresh_token);
        this.router.navigate(['/dashboard'])
      },
      error: error =>{
        console.log('error',error);
        this._toastrService.error(error.error.error_description,'Error!')
      }
    });
  }

}
