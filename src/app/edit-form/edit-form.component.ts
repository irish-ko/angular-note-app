import {EventEmitter, Component, Input, OnInit, Output} from '@angular/core';
import {Note} from "../note";
import {emptyNote, NotationService} from "../notation.service";

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  constructor(private notation: NotationService) { }

  category:string[] = this.notation.category;
  tmpNote:Note = emptyNote();


  @Input() editNote: Note = emptyNote();
  @Output() onCancelBtn = new EventEmitter();

  ngOnInit(): void {
    this.takeCopy(this.tmpNote, this.editNote);
  }

  cancelForm(){
    this.takeCopy(this.editNote, this.tmpNote);
    this.onCancelBtn.emit();
  }
  onEditeNote(){
    console.log(this.editNote);
    this.onCancelBtn.emit();
  }

  takeCopy(taker:Note, giver:Note):void{
    taker.name = giver.name;
    taker.content = giver.content;
    taker.category = giver.category;
  }
  
}
