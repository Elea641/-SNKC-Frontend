import { Injectable } from '@angular/core';
import { Colors } from '../models/enum/colors';
import { StateOfWear } from '../models/enum/stateofwear';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

constructor() { }

static stateOfWearToString(stateofwear: string): string{
  switch(stateofwear) {
    case "Neuf":
    return "NEUF";
    
    case "Très bon état":
    return "TRES_BON_ETAT";
    
    case "Bon état":
    return "BON_ETAT";
    
    case "Etat moyen":
    return "ETAT_MOYEN";
    
    case "Usé":
    return "USE";
    
    default:
    throw new Error("StateOfWear not recognized");
  }
}

// static colorsToString(colors: number): string{
//   switch(colors) {

//     case Colors.WHITE:
//     return "White";
    
//     case  Colors.BLACK:
//     return "Black";
    
//     case Colors.RED:
//     return "Red";
    
//     case Colors.BLUE:
//     return "Blue";
    
//     case Colors.GREEN:
//     return "Green";
    
//     case Colors.PURPLE:
//     return "Purple";
    
//     case Colors.YELLOW:
//     return "Yellow";
    
//     case Colors.ORANGE:
//     return "Orange";
    
//     case Colors.PINK:
//     return "Pink";
    
//     case Colors.BROWN:
//     return "Brown";
    
//     case Colors.GREY:
//     return "Grey";
    
//     case Colors.MULTI:
//     return "Multi";
    
//     case Colors.OTHER:
//     return "Other";

//     default:
//     throw new Error("Colors not recognized");
//   }
// }

}
