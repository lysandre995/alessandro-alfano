import { Injectable } from '@angular/core';
import { constants } from '../constants';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _title = "";
  private _description = "";
  private data: any;

  constructor(private readonly httpClient: HttpClient) { }

  public get title(): string {
    return this._title;
  }

  public get description(): string {
    return this._description;
  }

  public async getRemoteData(): Promise<void> {
    if (!this.data) {
      this.data = (await axios.get(constants.DATA_URL)).data;
    }
    return this.data;
  }
}
