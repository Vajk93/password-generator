import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-section',
  templateUrl: './result-section.component.html',
  styleUrls: ['./result-section.component.css']
})
export class ResultSectionComponent {
	@Input() isGeneratedPassword:boolean = false;
	@Input() password = '';
	
	protected interval:any;
	
	protected copy(password:string){
		this.isCopyWasSuccessful = false;
		clearTimeout(this.interval);
		navigator.clipboard.writeText(password).then(() => {
			  this.isCopyWasSuccessful = true;
			  this.interval = setTimeout(()=>{
				this.isCopyWasSuccessful = false
			  },2000)
		}).catch(err => {
			this.isCopyWasSuccessful = false
		});
	}

	protected isCopyWasSuccessful:boolean = false;
	
}

