import { HostListener, Injectable } from "@angular/core";
import { BookingSocketService } from "./bookings/booking-status-socket.service";
import { SocketIoService } from "./services/socket-io.service";


@Injectable({
  providedIn: "root",
})
export class InitializeSocketService {
  public eventSubscribed = false;

  constructor(
    private readonly bookingSocketService: BookingSocketService,
    private readonly socketIoService: SocketIoService
  ) { }

  public start() {
    if (this.eventSubscribed) {
      return;
    }
    this.bookingSocketService.start();
    this.eventSubscribed = true;
  }

  @HostListener("window:unload")
  private disconnectSockets(): void {
    this.socketIoService.socket.disconnect();
  }
}
