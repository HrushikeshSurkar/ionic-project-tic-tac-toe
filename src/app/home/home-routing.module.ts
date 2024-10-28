import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { TicTacToeComponent } from '../tic-tac-toe/tic-tac-toe.component'; // Adjust the path as necessary

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'tic-tac-toe',
    component: TicTacToeComponent, // Use component directly
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
