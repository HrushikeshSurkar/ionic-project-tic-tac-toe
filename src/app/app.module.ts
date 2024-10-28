import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component'; // Adjust the path as necessary

@NgModule({
  declarations: [
    AppComponent,
    TicTacToeComponent, // Declare the TicTacToeComponent here
    // other components
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    // other modules
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
