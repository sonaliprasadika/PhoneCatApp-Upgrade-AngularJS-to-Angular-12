import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { PhonecatAppComponent } from './phonecat-app.component';
import { ShowDetailsComponent} from './show-details.comonent/show-details.component';
import { FormsModule } from '@angular/forms';
import { OrdersComponent } from './orders.component/orders.component';
import { HeroesService } from '../app-ajs/heroes.service';
import { Heroes } from './heroes';
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    UpgradeModule,
    FormsModule
  ],
  declarations:[
    PhonecatAppComponent,
    ShowDetailsComponent,
    OrdersComponent
  ],
  bootstrap:[
    PhonecatAppComponent
  ],
  entryComponents: [
    ShowDetailsComponent,
    PhonecatAppComponent
  ],
  providers: [
    HeroesService,
    Heroes
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
}
