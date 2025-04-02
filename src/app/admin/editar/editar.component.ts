import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit{
  nombre: string = '';
  fechaIni: string = '';
  firma: string = '';

  itemId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.itemId = params.get('id');
      this.nombre = this.itemId ? this.itemId : "";
      console.log('ID del ítem:', this.itemId);  
    });
  }
}
