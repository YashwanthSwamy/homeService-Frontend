import { Injectable } from "@angular/core";
import { User } from "../interface/user";

@Injectable({
  providedIn: "root"
})
export class UserInfoProviderService {

  getInfoFromLocalStorage(key: string) {
    const keyInfo = localStorage.getItem(key);
    return this.parseInput(keyInfo);
  }

  getCurrentUserId() {
    const { email } = this.getCurrentUserInfo();
    return email;
  }

  getUsername() {
    const { userName } = this.getCurrentUserInfo();
    return userName;
  }

  clearLocalStorage() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("subTenant");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("sessionExpiry");
    localStorage.removeItem("userSettings");
  }


  private parseInput(input: string | null) {
    if (input){
        return JSON.parse(input);
    }
  }

  private getCurrentUserInfo(): User {
    return this.getInfoFromLocalStorage("currentUser") as User;
  }
}
