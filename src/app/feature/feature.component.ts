import { Component } from "@angular/core";
import { UserInfoProviderService } from "../authorizer/services/userInfoProviderService";
// import { InitializeSocketService } from "../sockets/maint";


@Component({
  selector: "app-feature",
  templateUrl: "./feature.component.html",
  styleUrls: ["./feature.component.scss"]
})
export class FeatureComponent {

  constructor(
    // private readonly initializeSocketService: InitializeSocketService,
    private readonly userInfoProviderService: UserInfoProviderService
  ) {
    // subscribe to socket events
    // this.initializeSocketService.start();
  }

  signOut(){
    this.userInfoProviderService.clearLocalStorage()
  }
}