import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public displayName: string = '';
  public image: string = '';

  constructor(
    private _authenticationService: AuthenticationService,
  ) { 
    this._authenticationService.$profile.subscribe({
      next: profile =>{
        if(Object.keys(profile).length > 0){
          console.log(profile);
          this.displayName = profile.display_name;
          this.image = profile.images[0].url;
        }
      }
    })
  }

  ngOnInit(): void {
  }

}
