import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { SocketIoService } from "../services/socket-io.service";
import { BookingAddedModel } from "./models/booking-added.model";

@Injectable({
  providedIn: "root",
})
export class BookingSocketService {
  public eventSubscribed = false;
  public chargerAccessibilty$ = new Subject<BookingAddedModel>();

  constructor(private readonly socketIoService: SocketIoService) {
  }

  public start() {
    if (this.eventSubscribed) {
      return;
    }
    this.initializeBookingAddedSocket();
    this.eventSubscribed = true;
  }

  private initializeBookingAddedSocket() {
    this.socketIoService.socket.on(`event.booking.added`, (id: string) => {
      this.chargerAccessibilty$.next({ ChargerID: id, Status: "true" });
    });
  }
}
