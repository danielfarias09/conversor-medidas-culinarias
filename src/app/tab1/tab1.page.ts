import { Component } from '@angular/core';
import { Medida } from '../model/medida';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
import { PopoverController } from '@ionic/angular';  
import { PopovercomponentPage } from '../popovercomponent/popovercomponent.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public mostrarCard: boolean;
  public resultado: string;
  public medidas: Array<Medida>;
  public medida1: Medida;
  public medida2: Medida;
  public qtdML: number;
  public formulario: FormGroup;

  constructor(public formBuilder: FormBuilder,private admobFree : AdMobFree,
    private popover:PopoverController ) {}

  ngOnInit(){
    this.inicializar();
    this.mostrarBannerAdmob();
  }

  private inicializar() {

    this.formulario = this.formBuilder.group({
      quantidade: new FormControl(null,[Validators.required,  Validators.maxLength(3),
         Validators.pattern("^[/1-9]*$")]),
      medida1: new FormControl(null,Validators.required),
      medida2: new FormControl(null, Validators.required)
    });

    this.medidas = [
      new Medida("Colher de sopa","Colheres de sopa", 15),
      new Medida("Colher de sobremesa","Colheres de sobremesa", 10),
      new Medida("Colher de chá","Colheres de chá", 5),
      new Medida("Colher de café","Colheres de café", 2.5),
      new Medida("Xícara de chá","Xícaras de chá", 250),
      new Medida("Xícara de café","Xícaras de café", 180),
      new Medida("Copo americano","Copos americanos", 200),
      new Medida("Copo de requeijão","Copos de requeijão", 250),
    ];
  }

  escondeCard(){
    if(this.mostrarCard) this.mostrarCard = false;
  }

  private formataResultado(form: any) {
      let quantidade = form.quantidade;
      let ehFracao: boolean = quantidade.includes("/");
      this.tratarFracao(quantidade);
      let medida1: Medida = form.medida1;
      let medida2: Medida = form.medida2;
      let qtdML: number = medida1.ml * (ehFracao ? this.tratarFracao(quantidade): quantidade);
      let conversao:number = (qtdML/medida2.ml);
      
      //Formatando o texto caso seja singular ou plural
      let resultadoMl:string = `${quantidade} ${quantidade > 1 ? medida1.plural + ` são equivalentes a `: medida1.nome + ` é equivalente a `} ${qtdML.toFixed(1)} ml `;
      let resultadoConversao = `${quantidade} ${quantidade > 1 ? medida1.plural + ` são equivalentes a `: medida1.nome + ` é equivalente a `} ${conversao.toFixed(1)} ${conversao > 1 ? medida2.plural: medida2.nome}`;
      return (String(medida2) === 'ml' ? resultadoMl:  resultadoConversao);
  }

  private tratarFracao(fracao: any){
    fracao = fracao.split("/",2);
    return Number(fracao[0])/Number(fracao[1]);
  }

  mostrarPopover(){
    let form:any = this.formulario.value;
    if(form.quantidade != null && form.medida1 != null && form.medida2 != null){
      this.resultado =  this.formataResultado(form);
      this.popover.create({
        component:PopovercomponentPage,
        componentProps:{resultado:this.resultado },
       showBackdrop:false}).then((popoverElement)=>{
         popoverElement.present();
       })
    }
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
