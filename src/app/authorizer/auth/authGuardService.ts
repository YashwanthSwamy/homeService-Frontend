import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { UserInfoProviderService } from "../services/userInfoProviderService";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate {

  constructor(
    private readonly router: Router,
    private readonly userInfoProviderService: UserInfoProviderService,
  ) { }

  canActivate() {
    const currentUserInfo = this.userInfoProviderService.getInfoFromLocalStorage("currentUser");

    if (!currentUserInfo) {
      return true;
    }

    this.navigateToHomePage();
    return false;
  }

  private navigateToHomePage() {
    this.router.navigate(["/homepage"]);
  }

}
