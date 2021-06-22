import { Component, Output,EventEmitter,OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  
  
  
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebonce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';
  
  dbouncer: Subject<string> = new Subject();
  
  termino: string = '';
  
  ngOnInit() {
    this.dbouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(valor => {
        this.onDebonce.emit(valor);
    })
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.dbouncer.next(this.termino);

  }

}