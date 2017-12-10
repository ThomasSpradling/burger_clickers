function bigNum(number, maxPlaces, small) {
  	number = Math.ceil(Number(number));
  	var abbr;
  	var rounded = 0;
  	if(number >= 1e1008) {
    	if(small) {
  			abbr = 'Q<sub>3</sub>';
  		} else {
  			abbr = ' Quinquatrigintillion';
  		}
    	rounded = number / 1e108;
  	}
  	else if(number >= 1e105) {
    	if(small) {
  			abbr = 'q<sub>3</sub>';
  		} else {
  			abbr = ' Quattuortrigintillion';
  		}
    	rounded = number / 1e105;
  	}
  	else if(number >= 1e102) {
    	if(small) {
  			abbr = 'Q<sub>3</sub>';
  		} else {
  			abbr = ' Trestrigintillion';
  		}
    	rounded = number / 1e102;
  	}
  	else if(number >= 1e100) {
    	if(small) {
  			abbr = 'G';
  		} else {
  			abbr = ' Googol';
  		}
    	rounded = number / 1e42;
  	}
  	else if(number >= 1e99) {
    	if(small) {
  			abbr = 'D<sub>3</sub>';
  		} else {
  			abbr = ' Duotrigintillion';
  		}
    	rounded = number / 1e99;
  	}
  	else if(number >= 1e96) {
    	if(small) {
  			abbr = 'U<sub>3</sub>';
  		} else {
  			abbr = ' Untrigintillion';
  		}
    	rounded = number / 1e96;
  	}
  	else if(number >= 1e93) {
    	if(small) {
  			abbr = 'Trig';
  		} else {
  			abbr = ' Trigintillion';
  		}
    	rounded = number / 1e93;
  	}
  	else if(number >= 1e90) {
    	if(small) {
  			abbr = 'N<sub>2</sub>';
  		} else {
  			abbr = ' Novemvigintillion';
  		}
    	rounded = number / 1e90;
  	}
  	else if(number >= 1e87) {
    	if(small) {
  			abbr = 'O<sub>2</sub>';
  		} else {
  			abbr = ' Octovigintillion';
  		}
    	rounded = number / 1e87;
  	}
  	else if(number >= 1e84) {
    	if(small) {
  			abbr = 'S<sub>2</sub>';
  		} else {
  			abbr = ' Septemvigintillion';
  		}
    	rounded = number / 1e84;
  	}
  	else if(number >= 1e81) {
    	if(small) {
  			abbr = 's<sub>2</sub>';
  		} else {
  			abbr = ' Sesvigintillion';
  		}
    	rounded = number / 1e81;
  	}
  	else if(number >= 1e78) {
    	if(small) {
  			abbr = 'Q<sub>2</sub>';
  		} else {
  			abbr = ' Quinquavigintillion';
  		}
    	rounded = number / 1e78;
  	}
  	else if(number >= 1e75) {
    	if(small) {
  			abbr = 'q<sub>2</sub>';
  		} else {
  			abbr = ' Quattuorvigintillion';
  		}
    	rounded = number / 1e75;
  	}
  	else if(number >= 1e72) {
    	if(small) {
  			abbr = 'T<sub>2</sub>';
  		} else {
  			abbr = ' Tresvigintillion';
  		}
    	rounded = number / 1e72;
  	}
  	else if(number >= 1e69) {
    	if(small) {
  			abbr = 'D<sub>2</sub>';
  		} else {
  			abbr = ' Duovigintillion';
  		}
    	rounded = number / 1e69;
  	}
  	else if(number >= 1e66) {
    	if(small) {
  			abbr = 'U<sub>2</sub>';
  		} else {
  			abbr = ' Unvigintillion';
  		}
    	rounded = number / 1e66;
  	}
  	else if(number >= 1e63) {
    	if(small) {
  			abbr = 'V';
  		} else {
  			abbr = ' Vigintillion';
  		}
    	rounded = number / 1e63;
  	}
  	else if(number >= 1e60) {
    	if(small) {
  			abbr = 'N<sub>1</sub>';
  		} else {
  			abbr = ' Novendecillion';
  		}
    	rounded = number / 1e60;
  	}
  	else if(number >= 1e57) {
    	if(small) {
  			abbr = 'O<sub>1</sub>';
  		} else {
  			abbr = ' Octodecillion';
  		}
    	rounded = number / 1e57;
  	}
  	else if(number >= 1e54) {
    	if(small) {
  			abbr = 'S<sub>1</sub>';
  		} else {
  			abbr = ' Septendecillion';
  		}
    	rounded = number / 1e54;
  	}
  	else if(number >= 1e51) {
    	if(small) {
  			abbr = 's<sub>1</sub>';
  		} else {
  			abbr = ' Sedecillion';
  		}
    	rounded = number / 1e51;
  	}
  	else if(number >= 1e48) {
    	if(small) {
  			abbr = 'Q<sub>1</sub>';
  		} else {
  			abbr = ' Quinquadecillion';
  		}
    	rounded = number / 1e48;
  	}
  	else if(number >= 1e45) {
    	if(small) {
  			abbr = 'q<sub>1</sub>';
  		} else {
  			abbr = ' Quattuordecillion';
  		}
    	rounded = number / 1e45;
  	}
  	else if(number >= 1e42) {
    	if(small) {
  			abbr = 'T<sub>1</sub>';
  		} else {
  			abbr = ' Tredecillion';
  		}
    	rounded = number / 1e42;
  	}
  	else if(number >= 1e39) {
    	if(small) {
  			abbr = 'D<sub>1</sub>';
  		} else {
  			abbr = ' Duodecillion';
  		}
    	rounded = number / 1e39;
  	}
  	else if(number >= 1e36) {
    	if(small) {
  			abbr = 'U<sub>1</sub>';
  		} else {
  			abbr = ' Undecillion';
  		}
    	rounded = number / 1e36;
  	}
  	else if(number >= 1e33) {
    	if(small) {
  			abbr = 'D';
  		} else {
  			abbr = ' Decillion';
  		}
    	rounded = number / 1e33;
  	}
  	else if(number >= 1e30) {
    	if(small) {
  			abbr = 'N';
  		} else {
  			abbr = ' Nonillion';
  		}
    	rounded = number / 1e30;
  	}
  	else if(number >= 1e27) {
    	if(small) {
  			abbr = 'O';
  		} else {
  			abbr = ' Octillion';
  		}
    	rounded = number / 1e27;
  	}
  	else if(number >= 1e24) {
    	if(small) {
  			abbr = 'S';
  		} else {
  			abbr = ' Septillion';
  		}
    	rounded = number / 1e24;
  	}
  	else if(number >= 1e21) {
    	if(small) {
  			abbr = 's';
  		} else {
  			abbr = ' Sextillion';
  		}
    	rounded = number / 1e21;
  	}
  	else if(number >= 1e18) {
    	if(small) {
  			abbr = 'Q';
  		} else {
  			abbr = ' Quintillion';
  		}
    	rounded = number / 1e18;
  	}
  	else if(number >= 1e15) {
    	if(small) {
  			abbr = ' q';
  		} else {
  			abbr = ' Quadrillion';
  		}
    	rounded = number / 1e15;
  	}
  	else if(number >= 1e12) {
    	if(small) {
  			abbr = 'T';
  		} else {
  			abbr = ' Trillion';
  		}
    	rounded = number / 1e12;
  	}
  	else if(number >= 1e9) {
    	if(small) {
  			abbr = 'B';
  		} else {
  			abbr = ' Billion';
  		}
    	rounded = number / 1e9;
  	}
  	else if(number >= 1e6) {
    	if(small) {
  			abbr = 'M';
  		} else {
  			abbr = ' Million';
  		}
    	rounded = number / 1e6;
  	}
  	else if(number >= 1e3) {
    	if(small) {
  			abbr = 'K';
  		} else {
  			abbr = ' Thousand';
  		}
    	rounded = number / 1e3;
  	}
  	else {
    	if(small) {
  			abbr = '';
  		} else {
  			abbr = '';
  		}
    	rounded = number;
  	}
  	if(maxPlaces !== false) {
    	var test = new RegExp('\\.\\d{' + (maxPlaces + 1) + ',}$')
    	if(test.test(('' + rounded))) {
      		rounded = rounded.toFixed(maxPlaces);
    	}
  	}
  	return rounded + abbr;
}
