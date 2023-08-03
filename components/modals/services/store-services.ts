import { AxiosResponse } from 'axios';
import { Store } from '@prisma/client';

import $api from '@/http';

export class StoreServices {
  static createStore(
    newStore: Pick<Store, 'name'>
  ): Promise<AxiosResponse<Store>> {
    return $api.post('/stores', newStore);
  }
}
