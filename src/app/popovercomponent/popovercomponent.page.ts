import { Component, OnInit, Input } from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-popovercomponent',
  templateUrl: './popovercomponent.page.html',
  styleUrls: ['./popovercomponent.page.scss'],
})
export class PopovercomponentPage implements OnInit {
  @Input("resultado") resultado;

  constructor(private popover:PopoverController) { }

  ngOnInit() {
  }

  fecharPopover(){
    this.popover.dismiss();
  }

}
