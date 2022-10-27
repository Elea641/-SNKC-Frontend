import { Injectable } from '@angular/core';
import { Colors } from '../models/enum/colors';
import { StateOfWear } from '../models/enum/stateofwear';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

constructor() { }

static stateOfWearToString(stateofwear: StateOfWear): string{
  console.log(stateofwear);
  switch(stateofwear) {
    case StateOfWear.NEUF:
    return "Neuf";
    break;
    
    case StateOfWear.TRES_BON_ETAT:
    return "Très bon état";
    break;
    
    case StateOfWear.BON_ETAT:
    return "Bon état";
    break;
    
    case StateOfWear.ETAT_MOYEN:
    return "Etat moyen";
    break;
    
    case StateOfWear.USE:
    return "Usé";
    break;
    
    default:
    throw new Error("StateOfWear not recognized");
    break;
  }
}

static stringToStateOfWear(stateofwear: string): StateOfWear{
  console.log(stateofwear);
  switch(stateofwear) {
    case "Neuf":
    return StateOfWear.NEUF;
    break;
    
    case "Très bon état":
    return StateOfWear.TRES_BON_ETAT;
    break;
    
    case "Bon état" :
    return StateOfWear.BON_ETAT;
    break;

    case "Etat moyen":
    return StateOfWear.ETAT_MOYEN;
    break;
    
    case "Usé":
    return StateOfWear.USE;
    break;

    default:
      throw new Error("StateOfWear not recognized");
      break;
  }
}

static colorsToString(colors: Colors): string{

  switch(colors) {
    case Colors.WHITE:
    return "White";
    break;
    
    case  Colors.BLACK:
    return "Black";
    break;
    
    case Colors.RED:
    return "Red";
    break;
    
    case Colors.BLUE:
    return "Blue";
    break;
    
    case Colors.GREEN:
    return "Green";
    break;
    
    case Colors.PURPLE:
    return "Purple";
    break;
    
    case Colors.YELLOW:
    return "Yellow";
    break;
    
    case Colors.ORANGE:
    return "Orange";
    break;
    
    case Colors.PINK:
    return "Pink";
    break;
    
    case Colors.BROWN:
    return "Brown";
    break;
    
    case Colors.GREY:
    return "Grey";
    break;
    
    case Colors.MULTI:
    return "Multi";
    break;
    
    case Colors.OTHER:
    return "Other";
    break;
    
    default:
    throw new Error("Colors not recognized");
    break;
  }
}

static stringToColors(colors: string): Colors{
  console.log(colors);
  switch(colors) {
    case "White":
      return Colors.WHITE;
      break;
      
      case "Black":
      return Colors.BLACK;
      break;
      
      case "Red":
      return Colors.RED;
      break;
      
      case "Blue":
      return Colors.BLUE;
      break;
      
      case "Green":
      return Colors.GREEN;
      break;
      
      case "Purple":
      return Colors.PURPLE;
      break;
      
      case "Yellow":
      return Colors.YELLOW;
      break;
      
      case "Orange":
      return Colors.ORANGE;
      break;
      
      case "Pink":
      return Colors.PINK;
      break;
      
      case "Brown":
      return Colors.BROWN;
      break;
      
      case "Grey":
      return Colors.GREY;
      break;
      
      case "Multi":
      return Colors.MULTI;
      break;
      
      case "Other":
      return Colors.OTHER;
      break;
      
      default:
      throw new Error("Colors not recognized");
      break;
    
  
  }
}

}
