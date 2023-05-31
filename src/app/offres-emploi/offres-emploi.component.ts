import { Component, OnInit } from '@angular/core';
import { Emploi } from '../models/emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {
  listeEmploi:Emploi[]=[];
  bilan!:number;
  constructor() { }

  ngOnInit(): void {
    this.listeEmploi=[
      {reference:'ref1',titre:'titre1',entreprise:'entreprise1',etat:true},
      {reference:'ref2',titre:'titre2',entreprise:'entreprise2',etat:false},
      { reference: 'ref3', titre: 'titre3', entreprise: 'entreprise3', etat: true}
    ];
  }
bilanCalculer(){
  // for(let i=0;i<this.listeEmploi.length;i++){
  //   if(this.listeEmploi[i].etat==true){
  //     this.bilan++;
  //   }
  // }
  this.bilan=0;
  this.bilan = this.listeEmploi.filter(e => e.etat == true).length;
}
}
