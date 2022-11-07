import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { faker } from '@faker-js/faker';


import { ListarPlantaComponent } from './listar-planta.component';
import { PlantasService } from '../plantas.service';
import { Planta } from '../Planta';

describe('ListarPlantaComponent', () => {
  let component: ListarPlantaComponent;
  let fixture: ComponentFixture<ListarPlantaComponent>;
  let debug: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListarPlantaComponent ],
      providers: [ PlantasService ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPlantaComponent);
    component = fixture.componentInstance;
    
    const nombreComun = ["margarita","rosa","hortencia","girasol","Acacia","Tulipan","lirio","Orquidea","clavel"];
    const tipo = ["Interior","Exterior"];
    const clima = ["frio","templado","caliente"];
    for(let i=0 ; i<3;i++){
      component.plantas.push(
        new Planta(
          faker.datatype.number({'min':1, 'max': 10000}),
          nombreComun[Math.floor(Math.random()*nombreComun.length)],
          tipo[Math.floor(Math.random()*tipo.length)],
          faker.name.firstName(),
          faker.datatype.number({'min':1, 'max':3000}), 
          clima[Math.floor(Math.random()*clima.length)],
          faker.lorem.sentence()
          )
      );
    }

    fixture.detectChanges();
    debug = fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 tbody > tr', () => {
    expect(debug.queryAll(By.css('tbody > tr'))).toHaveSize(3);
  });
  it('should have 1 thead', () => {
    expect(debug.queryAll(By.css('thead'))).toHaveSize(1);
  });
  

});
