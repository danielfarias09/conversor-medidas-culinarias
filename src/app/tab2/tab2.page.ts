import { Component } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private admobFree : AdMobFree) {
    this.mostrarBannerAdmob();
  }

  private mostrarBannerAdmob(){
    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-7173661742470104/8892964969',
      autoShow: true
      };
      this.admobFree.interstitial.config(bannerConfig);
  
      this.admobFree.interstitial.prepare()
      .then(() => {
          this.admobFree.interstitial.show()
      })
      .catch(e => console.log(e));  
    } 

}
