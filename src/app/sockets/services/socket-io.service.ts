import { Injectable } from "@angular/core";
import io from "socket.io-client";
import { UserInfoProviderService } from "src/app/authorizer/services/userInfoProviderService";
import { environment } from "../../../environments/environment";



@Injectable({
  providedIn: "root"
})
export class SocketIoService {

  public socket: SocketIOClient.Socket;

  constructor(
    private readonly userInfoProviderService: UserInfoProviderService,
  ) {
    this.defineSocketClient();
  }

  defineSocketClient() {

    const socketConfig: {
      path: string;
      query?: object;
      origins: string;
      transportOptions;

    } = {
      path: "/booking/livedata",
      origins: "*:*",
      transportOptions: {
        websocket: {
          extraHeaders: {}
        },
        polling: {
          extraHeaders: {}
        }
      }
    };

    const token = this.userInfoProviderService.getInfoFromLocalStorage("accessToken");
    socketConfig.transportOptions.polling.extraHeaders.token = token;
    socketConfig.transportOptions.websocket.extraHeaders.token = token;

    this.socket =  io("/", socketConfig);

  }

  connect(): void {
    this.socket.connect();
  }

  updateToken() {
    const token = this.userInfoProviderService.getInfoFromLocalStorage("accessToken");
    this.socket.io.opts.transportOptions = {
      websocket: {
        extraHeaders: {
          token
        }
      },
      polling: {
        extraHeaders: {
          token
        }
      }
    };
  }

  disconnect(): void {

    if (this.socket.connected) {
      this.socket.disconnect();
    }

  }
}

