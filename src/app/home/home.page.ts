import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public titulo: String = "Meu primeiro app em Ionic";
  public imagemRandomica: String = "https://source.unsplash.com/random/800x600";
    public imagemLocal: String = "../assets/icone-celular.png";

    public atualiza(): void {
      this.titulo = "texto do títilo moficado!"
    }

    public acao(): void {
      this.titulo = "Clicou no botão."
    }

}
