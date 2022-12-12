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


  clearLocalStorage() {
    localStorage.removeItem("currentUser");
  }


  private parseInput(input: string | null) {
    if (input){
        return JSON.parse(input);
    }
  }

  getCurrentUserInfo(): User {
    return this.getInfoFromLocalStorage("currentUser") as User;
  }
}
