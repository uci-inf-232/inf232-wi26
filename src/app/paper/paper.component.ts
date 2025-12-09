import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paper',
  imports: [],
  templateUrl: './paper.component.html',
  styleUrl: './paper.component.css'
})
export class PaperComponent {
  @Input() paper:any = {};

}
