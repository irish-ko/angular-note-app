import { Component, OnInit } from '@angular/core';
import {NotationService} from "../notation.service";
import {Note} from "../note";

@Component({
  selector: 'app-note-active',
  templateUrl: './note-active.component.html',
  styleUrls: ['./note-active.component.scss']
})
export class NoteActiveComponent implements OnInit {

    constructor(private notation: NotationService) { }
    notes:Note[] = [];
    butnDis: boolean = false;

    ngOnInit(): void {
        this.getActiveNote();
    }

    getActiveNote(){
        this.notes = this.notation.activeNote;
    }

    onMoveArchive(index:number){
        this.notation.archiveNote = this.onDeleteNote(index)
    }

    onDeleteNote(index:number):Note[] {
        return this.notes.splice(index,1);
    }

    onMoveEdite(ind:number):void{
        this.butnDis = !this.butnDis;
        this.notes[ind].isEdit = !this.notes[ind].isEdit
    }

}
