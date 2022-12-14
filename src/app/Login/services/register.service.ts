import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class RegisterService {
    constructor(private http: HttpClient) { }

    public addCustomer(userInfo: any) {
        return this.http.post(`${environment.userinfoApiUrl}adduser`, userInfo);
    }
}
