import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = 'http://localhost:8080/api/v1/rooms';

  constructor(
    private http: HttpClient
  ) { }

  getRoom(id: number): Observable<Room> {
    return this.http.get<Room>(`${this.baseUrl}/${id}`);
  }

  createRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(`${this.baseUrl}`, room);
  }

  updateRoom(id: number, value: Room): Observable<Room> {
    return this.http.put<Room>(`${this.baseUrl}/${id}`, value);
  }

  deleteRoom(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getRoomList(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.baseUrl}`);
  }
}
