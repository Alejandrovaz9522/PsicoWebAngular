import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment"
import { Psicologo } from '../interfaces/psicologo';
import { PsicologoJson } from "../interfaces/PsicologoJson";

@Injectable({
    providedIn: 'root'
  })
export class PsicologoService{

    myAppUrl: string 
    myApiUrl: string
    myApiUrlOne: string

    constructor(private http: HttpClient) { 
        this.myAppUrl = environment.endpoint
        this.myApiUrl = '/psicologos/'
        this.myApiUrlOne = '/psicologo/'
    }

    getPsicologo(mascotaId: number | undefined): Observable<any>{
        return this.http.get(this.myAppUrl + this.myApiUrlOne + mascotaId)
    }

    getListPsicologos(): Observable<any>{
        return this.http.get(this.myAppUrl + this.myApiUrl)
    }

    savePsicologo(psicologo: PsicologoJson): Observable<any>{
        return this.http.post(this.myAppUrl + this.myApiUrlOne, psicologo)
    }

    editPsicologo(psicologo: PsicologoJson, psicologoId: number | undefined): Observable<any>{
        return this.http.put(this.myAppUrl + this.myApiUrlOne + psicologoId, psicologo)
    }

    deletePsicologo(psicologoId: number | undefined): Observable<any>{
        return this.http.delete(this.myAppUrl + this.myApiUrlOne + psicologoId)
    }
}