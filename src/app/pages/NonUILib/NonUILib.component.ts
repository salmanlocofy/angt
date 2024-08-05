import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { LottieComponent } from "ngx-lottie";
@Component({
  selector: "non-ui-lib",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [LottieComponent],
  templateUrl: "./NonUILib.component.html",
  styleUrls: ["./NonUILib.component.css"],
})
export class NonUILib {
  @HostBinding("style.display") display = "contents";

  handleLoadStartWf(event: Event): void {
    const video = event.target as HTMLVideoElement;
    if (video) {
      video.volume = 0.8;
    }
  }

  handleLoadStartZh(event: Event): void {
    const audio = event.target as HTMLAudioElement;
    if (audio) {
      audio.volume = 0.8;
    }
  }

  handleLoadStartBn(event: Event): void {
    const audio = event.target as HTMLAudioElement;
    if (audio) {
      audio.volume = 0.8;
    }
  }
}
