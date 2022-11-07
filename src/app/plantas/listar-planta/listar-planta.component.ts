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
  cantidadPlantasInterior:number=0;
  cantidadPlantasExterior:number=0;
  ngOnInit(): void {
    this.getAllPlants();
  }

  getAllPlants(){
    this.plantaService.getAllPlants().subscribe((plantas)=>{
        this.plantas=plantas;
        this.getCantidadPorTipoPlanta(plantas)
    });
  }
  
  getCantidadPorTipoPlanta(plantas:Array<Planta>){
    this.cantidadPlantasInterior = plantas.filter(p=> p.tipo=="Interior").length;
    this.cantidadPlantasExterior = plantas.filter(p=> p.tipo=="Exterior").length;
  }

}
