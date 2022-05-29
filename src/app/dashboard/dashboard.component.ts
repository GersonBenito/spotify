import { Component, OnInit } from '@angular/core';
import { getLocalStorage } from 'src/helpers/helpers';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _authenticationService: AuthenticationService
  ) {
    this.getUser();
  }

  ngOnInit(): void {
  }

  getUser(){
    const access_token = getLocalStorage('access_token');
    this._authenticationService.getUser(access_token).subscribe({
      next: response =>{
        // TODO: test
        this._authenticationService.$profile.next(response);
      },
      error: error =>{
        console.log('error', error);
        
      }
    });
  }

}
