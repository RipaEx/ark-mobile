import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/mergeMap';

import { StorageProvider } from '@providers/storage/storage';
import { SettingsDataProvider } from '@providers/settings-data/settings-data';
import { NetworkProvider } from '@providers/network/network';

import * as model from '@models/market';
import { UserSettings } from '@models/settings';
import * as constants from '@app/app.constants';

@Injectable()
export class MarketDataProvider {

  public onUpdateTicker$: Subject<model.MarketTicker> = new Subject<model.MarketTicker>();
  public onUpdateHistory$: Subject<model.MarketHistory> = new Subject<model.MarketHistory>();

  private settings: UserSettings;
  private marketTicker: model.MarketTicker;
  private marketHistory: model.MarketHistory;

  constructor(
    private http: HttpClient,
    private storageProvider: StorageProvider,
    private settingsDataProvider: SettingsDataProvider,
    private networkProvider: NetworkProvider
  ) {
    this.loadData();
    this.fetchTicker();

    settingsDataProvider.settings.subscribe((settings) => {
      this.settings = settings;
      this.fetchHistory();
    });

    this.onUpdateSettings();
  }

  get history(): Observable<model.MarketHistory> {
    if (this.marketHistory) { return Observable.of(this.marketHistory); }

    return this.fetchHistory();
  }

  get cachedHistory(): model.MarketHistory {
     return this.marketHistory;
  }

  get ticker(): Observable<model.MarketTicker> {
    if (this.marketTicker) { return Observable.of(this.marketTicker); }

    return this.fetchTicker();
  }

  get cachedTicker(): model.MarketTicker {
     return this.marketTicker;
  }

  refreshTicker(): void {
    
    this.fetchTicker().subscribe((ticker) => {
      this.onUpdateTicker$.next(ticker);
    });
  }

  private fetchTicker(): Observable<model.MarketTicker> {
    const currentNetwork = this.networkProvider.currentNetwork;
   
      const url = `${constants.API_MARKET_URL}/${constants.API_MARKET_TICKER_ENDPOINT}` + currentNetwork.token;

      const currenciesList = model.CURRENCIES_LIST.map((currency) => {
        return currency.code.toUpperCase();
      }).join(',');

      return this.http.get(url + '&tsyms=' + currenciesList).map((response) => {
         try {
          const json = response['RAW'][currentNetwork.token];
          const tickerObject = {
            symbol: json['BTC']['FROMSYMBOL'],
            currencies: json,
          };

          this.marketTicker = new model.MarketTicker().deserialize(tickerObject);
          this.storageProvider.set(constants.STORAGE_MARKET_TICKER, tickerObject);
          return this.marketTicker;
        } catch (e) {
          const json = {"BTC":{"TYPE":"5","MARKET":"CCCAGG","FROMSYMBOL":currentNetwork.token,"TOSYMBOL":"BTC","FLAGS":"1","PRICE":0.000015,"LASTUPDATE":1522965612,"LASTVOLUME":0,"LASTVOLUMETO":0,"LASTTRADEID":"15229656120001","VOLUMEDAY":0,"VOLUMEDAYTO":0,"VOLUME24HOUR":0,"VOLUME24HOURTO":0,"OPENDAY":0.000015,"HIGHDAY":0.000015,"LOWDAY":0.000015,"OPEN24HOUR":0.000015,"HIGH24HOUR":0.000015,"LOW24HOUR":0.000015,"LASTMARKET":"NaN","CHANGE24HOUR":0,"CHANGEPCT24HOUR":0,"CHANGEDAY":0,"CHANGEPCTDAY":0,"SUPPLY":0,"MKTCAP":0,"TOTALVOLUME24H":0,"TOTALVOLUME24HTO":0}};
          const tickerObject = {
            symbol: json['BTC']['FROMSYMBOL'],
            currencies: json,
          };
          this.marketTicker = new model.MarketTicker().deserialize(tickerObject);
          this.storageProvider.set(constants.STORAGE_MARKET_TICKER, tickerObject);
          return this.marketTicker;
        }
      }); 
      
  }

  fetchHistory(): Observable<model.MarketHistory> {
    const url = `${constants.API_MARKET_URL}/${constants.API_MARKET_HISTORY_ENDPOINT}`;
    const myCurrencyCode = ((!this.settings || !this.settings.currency)
      ? this.settingsDataProvider.getDefaults().currency
      : this.settings.currency).toUpperCase();
    return this.http.get(url + 'BTC')
      .map((btcResponse) => btcResponse)
      .flatMap((btcResponse) => this.http.get(url + myCurrencyCode).map((currencyResponse) => {
        const historyData = {
          BTC: btcResponse['Data'],
        };
        historyData[myCurrencyCode] = currencyResponse['Data'];
        const history = new model.MarketHistory().deserialize(historyData);

        this.marketHistory = history;
        this.storageProvider.set(constants.STORAGE_MARKET_HISTORY, historyData);
        this.onUpdateHistory$.next(history);

        return history;
      }));
  }

  private onUpdateSettings() {
    this.settingsDataProvider.onUpdate$.subscribe((settings) => {
      this.settings = settings;
      this.marketHistory = null;
    });
  }

  private loadData() {
    this.storageProvider.getObject(constants.STORAGE_MARKET_HISTORY).subscribe((history) => {
      if (history) {
        this.marketHistory = new model.MarketHistory().deserialize(history);
      }
    });
    this.storageProvider.getObject(constants.STORAGE_MARKET_TICKER).subscribe((ticker) => {
      if (ticker) {
        this.marketTicker = new model.MarketTicker().deserialize(ticker);
      }
    });
  }

}
