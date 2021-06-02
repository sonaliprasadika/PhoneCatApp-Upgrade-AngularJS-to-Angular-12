import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { PhonecatAppComponent } from './phonecat-app.component';
import { ShowDetailsComponent} from './show-details.comonent/show-details.component';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations:[
    PhonecatAppComponent,
    ShowDetailsComponent
  ],
  bootstrap:[
    PhonecatAppComponent
  ]
})
export class AppModule {
}
