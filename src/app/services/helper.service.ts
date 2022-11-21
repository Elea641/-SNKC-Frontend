import { Injectable } from '@angular/core';
import { Colors } from '../models/enum/colors';
import { StateOfWear } from '../models/enum/stateofwear';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

constructor() { }

static stateOfWearToString(stateofwear: StateOfWear): string{
  switch(stateofwear) {
    case StateOfWear.Neuf:
    return "Neuf";
    
    case StateOfWear['Très bon état']:
    return " Très Bon état";
    
    case StateOfWear['Bon état']:
    return "Bon état";
    
    case StateOfWear['Etat moyen']:
    return "Etat moyen";
    
    case StateOfWear.Usé:
    return "Usé";
    
    default:
    throw new Error("StateOfWear not recognized");
  }
}

static colorsToString(colors: Colors): string{
  switch(colors) {

    case Colors.Blanc:
    return "Blanc";
    
    case  Colors.Noir:
    return "Noir";
    
    case Colors.Rouge:
    return "Rouge";
    
    case Colors.Bleu:
    return "Bleu";
    
    case Colors.Vert:
    return "Vert";
    
    case Colors.Violet:
    return "Violet";
    
    case Colors.Jaune:
    return "Jaune";
    
    case Colors.Orange:
    return "Orange";
    
    case Colors.Rose:
    return "Rose";
    
    case Colors.Marron:
    return "Marron";
    
    case Colors.Gris:
    return "Gris";
    
    case Colors.Multi:
    return "Multi";
    
    case Colors.Autre:
    return "Autre";

    default:
    throw new Error("Colors not recognized");
  }
}

}
