import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import{Planta} from "./Planta"




@Injectable({
  providedIn: 'root'
})
export class PlantasService {

  private apiUrl = environment.apiBase;
  
  constructor(private http: HttpClient) { }
  
  getAllPlants(): Observable<Planta[]>{
    return this.http.get<Planta[]>(this.apiUrl);
  }
}
