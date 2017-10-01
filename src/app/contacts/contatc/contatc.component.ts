import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contatc.component.html',
  styleUrls: ['./contatc.component.css']
})
export class ContatcComponent implements OnInit {

@Input() contact = {
  name:"",
  phone: ""
}
@Output() contactDeleted = new EventEmitter();

remove(){
  this.contactDeleted.emit();
}

  constructor() { }

  ngOnInit() {
  }

}
