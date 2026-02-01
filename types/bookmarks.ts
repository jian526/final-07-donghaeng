export interface Bookmarks {
  type: string;
  user_id: number;
  target_id: number;
  _id: number;
  createdAt: string;
}

//API 응답 타입
export interface BookmarksResponse {
  ok: number;
  item: Bookmarks[];
}

export interface BookmarkResponse {
  ok: number;
  item: Bookmarks | null;
}
