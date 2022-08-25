import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'tc-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  /*
  nom !: string;
  prenom !: string;
  adresse !: string;
  */

  personne !: Personne;

  tabPersonnes : Array<Personne> = new Array<Personne>();

  constructor() { }

  ngOnInit(): void {
    /*
    this.nom = "vide";
    this.adresse = "vide";
    this.prenom = "vide";
    */
    this.personne = new Personne("vide", "vide", "vide");
  }

  ajout() {
    /**
    this.tabPersonnes.push(
      {nom: this.nom,
        prenom: this.prenom,
        adresse: this.adresse}
      );
      */
    this.tabPersonnes.push({...this.personne});
  }

}
