import {Component, Input, OnInit} from '@angular/core';
import {Note} from "../note";
import {emptyNote, NotationService} from "../notation.service";

@Component({
  selector: 'app-form-create-note',
  templateUrl: './form-create-note.component.html',
  styleUrls: ['./form-create-note.component.scss']
})
export class FormCreateNoteComponent implements OnInit {

    constructor(private notation: NotationService) { }

  showForm = true;
  newNote:Note = emptyNote();

  @Input() category:string[] = [];

  ngOnInit(): void {

  }

  onSaveNote(){
      this.newNote.id = this.notation.getNewId;
      this.newNote.category = this.category[+this.newNote.category];
      this.notation.activeNote = [this.newNote];
      this.changeForm();
  }

  changeForm():void{
    this.showForm = !this.showForm;
    this.newNote = emptyNote();
  }

}
