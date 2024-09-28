import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  	protected title = 'password-generator';
	public strength: 0 | 1 | 2 | 3| 4 = 1;
	protected isGeneratedPassword:boolean = false;
	public password = 'P4$5W0rD!';
	public charactersLength:number = 0;
	protected isErrorMsgVisible:boolean = false;

	public changeChecked(optionIndex:number){
		this.options[optionIndex].checked = !this.options[optionIndex].checked;
		this.setStrength();
	}

	protected clickGenerateBtn(){
		if(this.charactersLength !== 0 && (this.options[0].checked || this.options[1].checked || this.options[2].checked || this.options[3].checked)){
			this.generatePass();
		} else {
			this.isErrorMsgVisible = true;
		}
	}

	protected generatePass(){
		let _password = '';
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
		this.setStrength()
	}

	protected handleModal(value:boolean){
		this.isErrorMsgVisible = value;
	}

	private setStrength(){
		if(this.charactersLength === 0){
			this.strength = 0;
		}
		if(this.charactersLength < 6 && this.charactersLength > 0){
			this.strength = 1;
		}
		if(this.charactersLength < 11 && this.charactersLength > 5){
			this.strength = 2;
		}
		if(this.charactersLength < 15 && this.charactersLength > 10){
			this.strength = 3;
		}
		if(this.charactersLength > 14 && (this.options[0].checked && this.options[1].checked && this.options[2].checked && this.options[3].checked)){
			this.strength = 4;
		}
	}

	protected options:any = [
		{name: 'Include Uppercase Letters', checked:false},
		{name: 'Include Lowercase Letters', checked:false},
		{name: 'Include Numbers', checked:false},
		{name: 'Include Symbols', checked:false},
	]
}
