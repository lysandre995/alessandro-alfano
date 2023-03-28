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

  public async ngOnInit() {
    await this.getRemoteData()
  }

  public get title(): string {
    return this._title;
  }

  public get description(): string {
    return this._description;
  }

  private async getRemoteData() {
    const headerData = (await axios.get(constants.HEADER_DATA_URL)).data
    this._title = headerData.title
    this._description = headerData.description
  }
}
