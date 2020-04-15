import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FigureListComponent } from './figure-list/figure-list.component';
import { FigureComponent } from './figure/figure.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { MeasurePipe } from './pipes/measure.pipe';
import { AddFigureComponent } from './add-figure/add-figure.component';
import { HomeComponent } from './home/home.component';
import { EditFigureComponent } from './edit-figure/edit-figure.component';
import { FigureResolver } from './figureResolver';




@NgModule({
  declarations: [
    AppComponent,
    FigureListComponent,
    FigureComponent,
    CurrencyPipe,
    MeasurePipe,
    AddFigureComponent,
    HomeComponent,
    EditFigureComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'figures', component: FigureListComponent},
      {path: 'addFigure', component: AddFigureComponent},
      {path: 'editFigure/:index', component: EditFigureComponent,  resolve: {figure: FigureResolver}},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '*', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [FigureResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
