import { Component } from "@angular/core";
// import { InitializeSocketService } from "../sockets/maint";


@Component({
  selector: "app-feature",
  templateUrl: "./feature.component.html",
  styleUrls: ["./feature.component.scss"]
})
export class FeatureComponent {

  constructor(
    // private readonly initializeSocketService: InitializeSocketService
  ) {
    // subscribe to socket events
    // this.initializeSocketService.start();
  }
}