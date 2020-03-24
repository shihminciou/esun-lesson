export interface HttpResponseResult {
  /**
   * 回應成功嗎?
  */
  isOk: boolean;
  /**
   * 額外訊息
  */
  messages: string[] | string;
  /**
   * 回應資料
  */
  Value: Array<any> | any;
  /**
   * 其他屬性
  */
  properties?: any;
}
