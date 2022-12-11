import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

export interface SlotModel {
  ServiceProviderName: string;
  Start: string;
  End: string;
  Booked: boolean;
};

@Injectable({
  providedIn: "root",
})

export class HomepageService {
  constructor(private http: HttpClient) { }

  public getServiceOfferedInfo() {
    return this.http.get(`${environment.communityApiUrl}serviceProviders`);
  }
  
  public addSlots(serviceProviderId: string, slotInfo: SlotModel) {
    return this.http.put(`${environment.bookingApiUrl}slots/${serviceProviderId}`, slotInfo);
  }

  public getSlots(serviceProviderId: string) {
    return this.http.get(`${environment.bookingApiUrl}slots/${serviceProviderId}`);
  }

  public getServiceProviderSlots(serviceProviderId: string) {
    return this.http.get(`${environment.bookingApiUrl}slots/${serviceProviderId}`, { params : { service_provider_id: serviceProviderId}});
  }

  public bookSlot(serviceProviderId: string, slotInfo: SlotModel) {
    return this.http.put(`${environment.bookingApiUrl}slots/${serviceProviderId}`, slotInfo);
  }
}
