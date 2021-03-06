import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms' 

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { PopovercomponentPageModule } from '../popovercomponent/popovercomponent.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    PopovercomponentPageModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
