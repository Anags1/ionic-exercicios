import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  precoAlcool: any;
  precoGasolina: any;

  constructor() { }

  public resultado: String = "Resultado";

  public calcular() {
    
    if(this.precoAlcool && this.precoGasolina) {

      var pAlcool = parseFloat(this.precoAlcool);
      var pGasolina = parseFloat(this.precoGasolina);
      var res = pAlcool / pGasolina;
      if (res >= 0.7) {
        this.resultado = "Melhor custo é a Gasolina";
      } else {
        this.resultado = "Melhor custo é o Alcool";
      }

    }else {
      this.resultado = "Preecha os campos corretamente.";
    }
  }
}
