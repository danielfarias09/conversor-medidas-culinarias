import { Component, ViewChild } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
import { Ingrediente } from '../model/ingrediente';
import { PopoverController, IonSelect } from '@ionic/angular';  
import { PopovercomponentPage } from '../popovercomponent/popovercomponent.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public ingredientes: Array<Ingrediente>;
  public medidas: {[key: string]: string};
  public resultado: string;
  public ingredienteEscolhido: string;
  public medidaEscolhida: any;
  @ViewChild('selectMedida') selectMedida: IonSelect;

  constructor(private admobFree : AdMobFree,private popover:PopoverController) {}

  ngOnInit(){
    this.mostrarBannerAdmob();
    this.carregarIngredientes();
  }

  carregarIngredientes(){
    this.ingredientes = [
      new Ingrediente("Farinha de Trigo", {
        "1 xícara (chá)": "120 gramas",
        "1/2 xícara (chá)": "60 gramas",
        "1/4 xícara (chá)": "30 gramas",
        "1 colher (sopa)": "7,5 gramas",
        "1 colher (chá)": "2,5 gramas"
      }  
      ),
  
      new Ingrediente("Queijo ralado", {
        "1 xícara (chá)": "80 gramas",
        "1/2 xícara (chá)": "40 gramas",
        "1/4 xícara (chá)": "20 gramas",
        "1 colher (sopa)": "5 gramas",
        "1 colher (chá)": "1,5 gramas"
      }
      ),
  
      new Ingrediente("Mel", {
        "1 xícara (chá)": "300 gramas",
        "1/2 xícara (chá)": "150 gramas",
        "1/4 xícara (chá)": "75 gramas",
        "1 colher (sopa)": "18 gramas",
        "1 colher (chá)": "6 gramas"
      }
      ),

      new Ingrediente("Manteiga", {
        "1 xícara (chá)": "200 gramas",
        "1/2 xícara (chá)": "100 gramas",
        "1/4 xícara (chá)": "50 gramas",
        "1 colher (sopa)": "10 gramas",
        "1 colher (chá)": "4 gramas"
      }
      ),

      new Ingrediente("Chocolate ou cacau em pó", {
        "1 xícara (chá)": "90 gramas",
        "1/2 xícara (chá)": "45 gramas",
        "1/4 xícara (chá)": "22,5 gramas",
        "1 colher (sopa)": "6 gramas",
        "1 colher (chá)": "2 gramas"
      }
      ),

      new Ingrediente("Farinha de Mandioca", {
        "1 xícara (chá)": "150 gramas",
        "1/2 xícara (chá)": "75 gramas",
        "1/4 xícara (chá)": "37,5 gramas",
        "1 colher (sopa)": "9 gramas",
        "1 colher (chá)": "3 gramas"
      }
      ),

      new Ingrediente("Farinha de Rosca", {
        "1 xícara (chá)": "80 gramas",
        "1/2 xícara (chá)": "40 gramas",
        "1/4 xícara (chá)": "20 gramas",
        "1 colher (sopa)": "5 gramas",
        "1 colher (chá)": "1,5 gramas"
      }
      ),

      new Ingrediente("Açúcar refinado", {
        "1 xícara (chá)": "180 gramas",
        "1/2 xícara (chá)": "90 gramas",
        "1/4 xícara (chá)": "45 gramas",
        "1 colher (sopa)": "12 gramas",
        "1 colher (chá)": "4 gramas"
      }
      ),

      new Ingrediente("Açúcar cristal", {
        "1 xícara (chá)": "200 gramas",
        "1/2 xícara (chá)": "100 gramas",
        "1/4 xícara (chá)": "50 gramas",
        "1 colher (sopa)": "13,5 gramas",
        "1 colher (chá)": "4,5 gramas"
      }
      ),

      new Ingrediente("Açúcar de confeiteiro", {
        "1 xícara (chá)": "140 gramas",
        "1/2 xícara (chá)": "70 gramas",
        "1/4 xícara (chá)": "35 gramas",
        "1 colher (sopa)": "9,5 gramas",
        "1 colher (chá)": "43 gramas"
      }
      ),

      new Ingrediente("Amido de milho/Maizena", {
        "1 xícara (chá)": "150 gramas",
        "1/2 xícara (chá)": "75 gramas",
        "1/4 xícara (chá)": "37,5 gramas",
        "1 colher (sopa)": "9 gramas",
        "1 colher (chá)": "3 gramas"
      }
      ),

      new Ingrediente("Aveia em flocos", {
        "1 xícara (chá)": "80 gramas",
        "1/2 xícara (chá)": "40 gramas",
        "1/4 xícara (chá)": "20 gramas",
        "1 colher (sopa)": "5 gramas",
        "1 colher (chá)": "1,5 gramas"
      }
      ),

      new Ingrediente("Açúcar mascavo", {
        "1 xícara (chá)": "150 gramas",
        "1/2 xícara (chá)": "75 gramas",
        "1/4 xícara (chá)": "37,5 gramas",
        "1 colher (sopa)": "10 gramas",
        "1 colher (chá)": "3,5 gramas"
      },    
      ),

      new Ingrediente("Coco fresco ralado", {
        "1 xícara (chá)": "180 gramas",
        "1/2 xícara (chá)": "90 gramas",
        "1/4 xícara (chá)": "45 gramas",
        "1 colher (sopa)": "7 gramas",
        "1 colher (chá)": "2 gramas"
      },    
      ),

      new Ingrediente("Coco seco ralado", {
        "1 xícara (chá)": "80 gramas",
        "1/2 xícara (chá)": "40 gramas",
        "1/4 xícara (chá)": "20 gramas",
        "1 colher (sopa)": "5 gramas",
        "1 colher (chá)": "1,5 gramas"
      },    
      ),

      new Ingrediente("Fermento biológico seco", {
        "1 colher (sopa)": "10 gramas",
        "1/2 colher (sopa)": "5 gramas"
      },    
      ),

      new Ingrediente("Fermento químico em pó", {
        "1 colher (sopa)": "14 gramas",
        "1/2 colher (sopa)": "7 gramas",
        "1 colher (chá)": "5 gramas",
        "1/2 colher (chá)": "2,5 gramas"
      },    
      ),

      new Ingrediente("Fubá", {
        "1 xícara (chá)": "120 gramas",
        "1/2 xícara (chá)": "60 gramas",
        "1/4 xícara (chá)": "30 gramas",
        "1 colher (sopa)": "7,5 gramas",
        "1 colher (chá)": "2,5 gramas"
      },    
      ),

      new Ingrediente("Polvilho", {
        "1 xícara (chá)": "180 gramas",
        "1/2 xícara (chá)": "90 gramas",
        "1/3 xícara (chá)": "60 gramas",
        "1/4 xícara (chá)": "45 gramas",
        "1 colher (sopa)": "25 gramas"
      },    
      ),

    ];
    
  }

  selecionarIngrediente(valor){
    let ingrediente = valor.detail.value;
    this.ingredienteEscolhido = ingrediente.nome;
    this.medidas = ingrediente.medidas;
    setTimeout(() => {
      this.selectMedida.open();
   },150);  
  }

  selecionarMedida(valor){
    this.medidaEscolhida = valor;
  }

  mostrarPopover(){
    this.resultado = this.medidaEscolhida.key + " de " + this.ingredienteEscolhido + " é equivalente a " + this.medidaEscolhida.value;
    this.popover.create({
      component:PopovercomponentPage,
      componentProps:{resultado:this.resultado },
      showBackdrop:false}).then((popoverElement)=>{
        popoverElement.present();
      });
  }

  private mostrarBannerAdmob(){
    let bannerConfig: AdMobFreeBannerConfig = {
        //isTesting: true,
        id:'ca-app-pub-7173661742470104/5020689630',
        autoShow: true
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare()
    .then(() => {
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here
    })
    .catch(e => console.log(e));    
    }

}
