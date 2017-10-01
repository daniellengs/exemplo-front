import { Component, OnInit } from '@angular/core';
import { Contact } from './contacts.model';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  constructor(private contactsService:ContactsService) {}

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

  contacts:Contact[];
    meuinput = "";
    inputName = "";
    inputPhone = "";

delete(contact){
  let index = this.contacts.indexOf(contact);
  this.contacts.splice(index,1);
}

insertContact(){
let newContact:Contact = {
  name: this.inputName,
  phone: this.inputPhone
};
    this.contacts.push(newContact);
    this.inputName = "";
    this.inputPhone = "";

  }

}
