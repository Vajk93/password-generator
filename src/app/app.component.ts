
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  	title = 'password-generator';
	public strength: 0 | 1 | 2 | 3| 4 = 1;
	protected isGeneratedPassword:boolean = false;
	public password = 'P4$5W0rD!';
	public charactersLength:number = 5;

	public changeChecked(optionIndex:number){
		this.options[optionIndex].checked = !this.options[optionIndex].checked;
		this.setStrength()
	}

	protected setStrength(){
		this.strength = 0
		this.options.map((option:any) => {
			if(option.checked === true){
				this.strength += 1;
			}
		})
		console.log(this.strength);
	}

	protected generatePass(){
		let _password = '';
		// initial: (lowercase)
		let string = ''
		let strUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		let strLowercase = 'abcdefghijklmnopqrstuvwxyz'
		let strNumbers = '0123456789';
		let strSymbols = '#$!?&@';
	
		//uppercase:
		if(this.options[0].checked){
			string += strUppercase
		}
		//lowercase:
		if(this.options[1].checked){
			string += strLowercase
		}
		//numbers:
		if(this.options[2].checked){
			string += strNumbers
		}
		// symbols:
		if(this.options[3].checked){
			string += strSymbols
		}

    for (let i = 1; i < this.charactersLength +1; i++) {
        let char = Math.floor(Math.random() * string.length);

        _password += string.charAt(char)
    }
		this.isGeneratedPassword = true;
		this.password = _password;
	}

	protected setLength(value:number){
		this.charactersLength = value;
		console.log('Az app komponensben a csúszka értéke: ' + value);
	}

	protected options:any = [
		{name: 'Include Uppercase Letters', checked:false},
		{name: 'Include Lowercase Letters', checked:false},
		{name: 'Include Numbers', checked:false},
		{name: 'Include Symbols', checked:false},
	]
}
