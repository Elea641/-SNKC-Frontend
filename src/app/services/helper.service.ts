import { Injectable } from '@angular/core';
import { Colors } from '../models/enum/colors';
import { StateOfWear } from '../models/enum/stateofwear';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

constructor() { }

static stateOfWearToString(stateofwear: number): string{
  switch(stateofwear) {
    case StateOfWear.NEUF:
    return "Neuf";
    
    case StateOfWear.TRES_BON_ETAT:
    return "Très bon état";
    
    case StateOfWear.BON_ETAT:
    return "Bon état";
    
    case StateOfWear.ETAT_MOYEN:
    return "Etat moyen";
    
    case StateOfWear.USE:
    return "Usé";
    
    default:
    throw new Error("StateOfWear not recognized");
  }
}

static colorsToString(colors: number): string{

  switch(colors) {

    case Colors.WHITE:
    return "White";
    
    case  Colors.BLACK:
    return "Black";
    
    case Colors.RED:
    return "Red";
    
    case Colors.BLUE:
    return "Blue";
    
    case Colors.GREEN:
    return "Green";
    
    case Colors.PURPLE:
    return "Purple";
    
    case Colors.YELLOW:
    return "Yellow";
    
    case Colors.ORANGE:
    return "Orange";
    
    case Colors.PINK:
    return "Pink";
    
    case Colors.BROWN:
    return "Brown";
    
    case Colors.GREY:
    return "Grey";
    
    case Colors.MULTI:
    return "Multi";
    
    case Colors.OTHER:
    return "Other";

    default:
    throw new Error("Colors not recognized");
  }
}

static stringToColors(colors: string): Colors{
  switch(colors) {
      case "White":
      return Colors.WHITE
    
      case "Black":
      return Colors.BLACK;
      
      case "Red":
      return Colors.RED;
      
      case "Blue":
      return Colors.BLUE;
      
      case "Green":
      return Colors.GREEN;
      
      case "Purple":
      return Colors.PURPLE;
      
      case "Yellow":
      return Colors.YELLOW;
      
      case "Orange":
      return Colors.ORANGE;
      
      case "Pink":
      return Colors.PINK;
      
      case "Brown":
      return Colors.BROWN;
      
      case "Grey":
      return Colors.GREY;
      
      case "Multi":
      return Colors.MULTI;
      
      case "Other":
      return Colors.OTHER;

      default:
      throw new Error("Colors not recognized");
    
  
  }
}

}
