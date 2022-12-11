import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class BookingService {
  constructor(private http: HttpClient) { }

  public getCustomerBookings(customerId: string) {
    return this.http.get(`${environment.bookingApiUrl}all-bookings/${customerId}`);
  }

  public getServiceProviderBookings(serviceProviderId: string) {
    return this.http.get(`${environment.bookingApiUrl}all-bookings/${serviceProviderId}`, { params : { service_provider_id: serviceProviderId}});
  }
}
