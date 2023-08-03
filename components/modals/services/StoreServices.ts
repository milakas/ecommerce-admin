import { AxiosResponse } from 'axios';

import $api from '@/http';
import { PStore, Store } from './types';

export class StoreServices {
  static createStore(newStore: PStore): Promise<AxiosResponse<Store>> {
    return $api.post('/stores', newStore);
  }
}
