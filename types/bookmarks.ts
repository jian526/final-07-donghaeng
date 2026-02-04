export interface Bookmarks {
  type: string;
  user_id: number;
  target_id: number;
  product: {
    _id: number;
  };
  _id: number;
  createdAt: string;
}
