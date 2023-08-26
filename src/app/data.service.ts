import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

 
  private values:string[]=['kavi','devi','Sruthi','achu','vani'];

  private validCredentials=[
    {Username:'kavi',Password:'123'}
  ];
  getValues():string[]{
    return this.values;
  }
  addValue(value:string):void{
    this.values.push(value);
  }

  authenticate(username:string,password:string):boolean{
    const validUser=this.validCredentials.find(
      (cred)=>cred.Username===username && cred.Password===password
    );
    return !!validUser;
  }
}
