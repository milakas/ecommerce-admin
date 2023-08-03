export interface StoreDto {
  id: string;
  name: string;
  userID: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Store extends StoreDto {}
export interface PStore extends Pick<StoreDto, 'name'> {}
