import { Component, OnInit } from '@angular/core';
import { Planta } from '../Planta';
import { PlantasService } from '../plantas.service';

@Component({
  selector: 'app-listar-planta',
  templateUrl: './listar-planta.component.html',
  styleUrls: ['./listar-planta.component.css']
})
export class ListarPlantaComponent implements OnInit {

  constructor(private plantaService:PlantasService) { }
  
  plantas:Array<Planta>=[];
  ngOnInit(): void {
    this.getAllPlants();
  }

  getAllPlants(){
    this.plantaService.getAllPlants().subscribe((plantas)=>{
        this.plantas=plantas;
    });
  }
}
