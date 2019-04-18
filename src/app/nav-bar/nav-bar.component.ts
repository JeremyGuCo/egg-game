import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/assets/common/services/profile.service';
import { Profile } from 'src/assets/common/models/profile.model';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  navbarOpen = false;
  public tableProfile = [];
  public profil: Profile;
  public picture: string;
  public name: string;
  public origin: string;
  public money = 10;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(private service: ProfileService) { }

  ngOnInit() {
    this.service.getProfile().subscribe(
      (profile: Profile) => {
        this.profil = profile;
        console.log(profile);
        this.picture = profile.image;
        this.name = profile.name;
        this.origin = profile.origin;
      },
    );
  }

}
