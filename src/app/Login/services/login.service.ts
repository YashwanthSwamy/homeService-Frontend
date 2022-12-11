import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) { }

  public getCustomerInfo(customer_id: string, password: any) {
    return this.http.get(`${environment.userinfoApiUrl}isAuthorized/${customer_id}`, { params: { password }}).pipe(
        map((response: any) => {
            if (response.password){
                delete response.password
                return response;
            }
            return;
      }));
  }
}
