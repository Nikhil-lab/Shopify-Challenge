import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api/api.service';

interface Engine {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-shopify',
  templateUrl: './shopify.component.html',
  styleUrls: ['./shopify.component.css']
})
export class ShopifyComponent implements OnInit {

  responses = [];
  selectedEngine='text-curie-001';

  engines: Engine[] = [
    {value: 'text-davinci-002', viewValue: 'text-davinci-002'},
    {value: 'text-curie-001', viewValue: 'text-curie-001'},
    {value: 'text-babbage-001', viewValue: 'text-babbage-001'},
    {value: 'text-ada-001	', viewValue: 'text-ada-001	'},

  ];

  promptFormControl = new FormControl('', [
    Validators.required
  ]);
  storedResponse: string;

  constructor(private _service:ApiService) { }

  ngOnInit(): void {
    let temp = localStorage.getItem(this.storedResponse);
    if(temp){
      this.responses = JSON.parse(temp);
    }
  }

  submitPrompt(){
    console.log(this.promptFormControl.value);

    let data= {
      prompt:this.promptFormControl.value
    }



    this._service.postData(this.selectedEngine+"/completions",data).subscribe(res=>{
      console.log(res);
      this.responses.push({prompt:this.promptFormControl.value,
        response:res['choices'][0]['text']
    })

    this.responses.reverse();
    localStorage.setItem(this.storedResponse, JSON.stringify(this.responses));
    
    })

  }

}
