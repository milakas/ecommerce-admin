import axios, { AxiosResponse } from 'axios';
import { Store } from '@prisma/client';

export class StoreServices {
  static createStore(data: Pick<Store, 'name'>): Promise<AxiosResponse<Store>> {
    return axios.post('/api/stores', data);
  }

  static updateStore(
    data: Pick<Store, 'name'>,
    storeId: string | string[]
  ): Promise<AxiosResponse<Store>> {
    return axios.patch(`/api/stores/${storeId}`, data);
  }

  static deleteStore(
    storeId: string | string[]
  ): Promise<AxiosResponse<Store>> {
    return axios.delete(`/api/stores/${storeId}`);
  }
}
