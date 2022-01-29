import { Component, OnInit } from '@angular/core';
import {NotationService} from "../notation.service";
import {Note} from "../note";

@Component({
  selector: 'app-note-archive',
  templateUrl: './note-archive.component.html',
  styleUrls: ['./note-archive.component.scss']
})
export class NoteArchiveComponent implements OnInit {

  constructor(private notation: NotationService) { }
  notes:Note[] = [];

  ngOnInit(): void {
    this.getArchiveNote();
  }

  getArchiveNote():void{
    this.notes = this.notation.archiveNote;
  }

  onMoveActive(index:number):void{
    this.notation.activeNote = this.onDeleteNote(index);
  }

  onDeleteNote(index:number):Note[] {
    return this.notes.splice(index,1);
  }

}

