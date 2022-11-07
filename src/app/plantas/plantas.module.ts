import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPlantaComponent } from './listar-planta/listar-planta.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListarPlantaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports:[
    ListarPlantaComponent
  ]
})
export class PlantasModule { }
