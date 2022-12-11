import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class RegisterService {
    constructor(private http: HttpClient) { }

    public addCustomer(userInfo: any) {
        console.log("add user")
        return this.http.post(`${environment.apiUrl}/userinfo/adduser`, userInfo);
    }
}
