import { Injectable } from '@angular/core';
import { Contact } from './contacts.model';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ContactsService {

url = "";
  constructor(private http:Http) { }

getContacts(){
    return this.contacts;
}

contacts:Contact[] = [
  {
    name:"Dani",
    phone: "+55(81)989999888"
  },
  {
    name:"Poli",
    phone: "+55(81)934567888"
  },
  {
    name:"Erika",
    phone: "+55(81)989876549"
  }
]

}
