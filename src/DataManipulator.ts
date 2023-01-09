import { ServerRespond } from './DataStreamer';

export interface Row {
  price_abc:number,
  price_def:number,
  ratio:number,
 upper_bound: number,
  lower_bound: number,
  timestamp: Date,
  trigger_alert:number | undefined,
}


export class DataManipulator {
  static generateRow(serverResponds: ServerRespond[]) :Row {
    console.log(serverResponds);
    const abc_price = (serverResponds[0].top_ask.price + serverResponds[0].top_bid.price)/2;
    const def_price = (serverResponds[1].top_ask.price + serverResponds[1].top_bid.price)/2;
    const ratio = abc_price/def_price;
    const upper_bound = 1 + 0.02
    const lower_bound = 1 - 0.02
    const timestamp = serverResponds[0].timestamp
      return {
      price_abc:abc_price,
      price_def:def_price,
      ratio:ratio,
      upper_bound:upper_bound,
      lower_bound:lower_bound,
      trigger_alert:(ratio > upper_bound || ratio < lower_bound) ? ratio : undefined,
      timestamp:timestamp

      };
 
  }
}
