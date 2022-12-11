import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { UserInfoProviderService } from "../services/userInfoProviderService";

@Injectable({
  providedIn: "root",
})
export class FeatureGuardService implements CanActivate {

  constructor(
    private readonly router: Router,
    private readonly userInfoProviderService: UserInfoProviderService,
  ) { }

  async canActivate() {
    const currentUserInfo = this.userInfoProviderService.getInfoFromLocalStorage("currentUser");
    if (currentUserInfo) {
      return true;
    }

    this.navigateToSignInPage();
    return false;

  }

  private navigateToSignInPage() {
    this.router.navigate(['auth/login']);
  }

}
