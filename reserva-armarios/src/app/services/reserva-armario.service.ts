import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ReservaArmario } from '../models/reserva-armario.model';

@Injectable({
    providedIn: 'root'
})
export class ReservaArmarioService {

    private apiUrl = 'http://localhost:8080/api/reservas';

    constructor(private http: HttpClient) { }

    // Listar todas as reservas
    listar(): Observable<ReservaArmario[]> {
        return this.http.get<ReservaArmario[]>(this.apiUrl);
    }

    // Buscar reserva pelo ID
    buscarPorId(id: number): Observable<ReservaArmario> {
        return this.http.get<ReservaArmario>(`${this.apiUrl}/${id}`);
    }

    // Cadastrar uma reserva
    cadastrar(obj: ReservaArmario): Observable<ReservaArmario> {
        return this.http.post<ReservaArmario>(this.apiUrl, obj);
    }

    // Atualizar uma reserva
    atualizar(id: number, obj: ReservaArmario): Observable<ReservaArmario> {
        return this.http.put<ReservaArmario>(`${this.apiUrl}/${id}`, obj);
    }

    // Excluir uma reserva
    excluir(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    // Executar regra de negócio
    executarRegra(id: number, params: Record<string, unknown>): Observable<ReservaArmario> {
        return this.http.patch<ReservaArmario>(`${this.apiUrl}/${id}/regra`, params);
    }
}