import { Injectable } from '@angular/core';
import { constants } from '../constants';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CvHeaderDataService {
  private _title = "";
  private _description = "";

  constructor() { }

  public get title(): string {
    return this._title;
  }

  public get description(): string {
    return this._description;
  }

  public async getRemoteData(): Promise<void> {
    const { data } = await axios.get(constants.HEADER_DATA_URL, {
      headers: {
        "Access-Control-Allow-Credentials": false,
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Expose-Headers": "*",
        "Access-Control-Max-Age": "*",
        "Access-Control-Request-Headers": "*",
        "Access-Control-Request-Method": "*",
      }
    });
    return data;
  }
}
