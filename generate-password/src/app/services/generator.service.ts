import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  
  private _characters: {
    upperCase: string;
    lowerCase: string;
    number: string;
    symbols: string;
  };

  constructor() {
    this._characters = {
      upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lowerCase: 'abcdefghijklmnopqrstuvwxyz',
      number: '0123456789',
      symbols: '!@#$%^&*()_-+=<>?'
    };
  }


  public generatePassword(controls: {[key: string]: AbstractControl}): string {
    
    const characterLength = controls['characterLength'].value;
    const checkUppercase = controls['includedUppercase'].value;
    const checkLowercase = controls['includedLowercase'].value;
    const checkNumber = controls['includedNumber'].value;
    const checkSymbols = controls['includedSymbols'].value;

    let characterFinal = "";
    let password = '';


    if (checkUppercase) {
        characterFinal += this._characters.upperCase;
    }

    if (checkLowercase) {
        characterFinal += this._characters.lowerCase;
    }

    if (checkNumber) {
        characterFinal += this._characters.number;
    }

    if (checkSymbols) {
        characterFinal += this._characters.symbols;
    }

    
    for (let i = 0; i < characterLength; i++) {
        const indexRandom = Math.floor(Math.random() * characterFinal.length);
        password += characterFinal.charAt(indexRandom);
    }

    return password;
  }
}
