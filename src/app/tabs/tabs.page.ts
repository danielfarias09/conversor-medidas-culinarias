import { Component } from '@angular/core';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private admobFree : AdMobFree) {}

  mostrarInterstitial(){
    console.log("mostrarInterstitial");
    let bannerConfig: AdMobFreeInterstitialConfig = {
      //isTesting: true,
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
