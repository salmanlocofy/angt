import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { AppComponent } from "./app.component";
import { provideLottieOptions } from "ngx-lottie";
import player from "lottie-web";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideAnimationsAsync(),
    provideLottieOptions({
      player: () => player,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
