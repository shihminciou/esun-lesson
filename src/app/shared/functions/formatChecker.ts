import { isNullOrUndefined } from 'util';

/** checking formates */
export default class FormatChecker {
    /** 檢查身分證字號 */
    static isTaiwanId(idToCheck: string): boolean {
        // 因資料未使用正確身分證字號，先用這種比較醜得方式判斷
        // if (isNullOrUndefined(idToCheck)) {
        //     return false;
        // }
        // return idToCheck.length > 8;

        // @todo
        let city = new Array(
            1,10,19,28,37,46,55,64,39,73,82, 2,11,
           20,48,29,38,47,56,65,74,83,21, 3,12,30
       );
       idToCheck = idToCheck.toUpperCase(); // 轉大寫之後要再存入變數再做檢核
       // 使用「正規表達式」檢驗格式
       if (idToCheck.search(/^[A-Z](1|2)\d{8}$/i) === -1) {
        //    alert('基本格式錯誤');
           return false;
       } else {
           //將字串分割為陣列(IE必需這麼做才不會出錯)
           let splitedId = idToCheck.split('');
           //計算總分
           let total = city[splitedId[0].charCodeAt(0)-65];
           for(let i=1; i<=8; i++){
               // tslint:disable-next-line:no-eval
               total += eval(splitedId[i]) * (9 - i);
           }
           //補上檢查碼(最後一碼)
           // tslint:disable-next-line:no-eval
           total += eval(splitedId[9]);
           //檢查比對碼(餘數應為0);
           return ((total%10 === 0 ));
       }
    }

    /**
     * #270 新式居留證號前端檢核(新舊共存)
     * @param idToCheck 
     */
    /*檢驗測資
    //國人身分證(兩者皆非)
    U121357959
    //新式居留證
    A800000014
    A900000016
    A870000015
    A970000017
    A880000018
    A980000010
    A890000011
    A990000013
    //舊式居留證
    FA12345689
    */
    static isVISAId(idToCheck: string): boolean {
        // 轉大寫後再做檢核
        idToCheck = idToCheck.toUpperCase();

        // 使用「正規表達式」檢驗格式
        let isVISAOld = idToCheck.search(/^[A-Z]{2}[0-9]{8}$/) !== -1;
        let isVISANew = idToCheck.search(/^[A-Z][8-9]\d{8}$/) !== -1;
        // reqex解釋
        // ^開頭 $結尾
        // [A-Z]首碼A~Z
        // [8-9]第二碼為8~9
        // \d{8}剩下八碼為正整數

        // 若為新式居留證號，需另外做邏輯檢核
        if (isVISANew) {
            // copy right from NCS.ESB16925

            // (a)前兩碼取得
            let locationNum = [
                10, 11, 12, 13, 14, 15, 16, 17, 34, 18, 19, 20, 21,
                22, 35, 23, 24, 25, 26, 27, 28, 29, 32, 30, 31, 33
            ][idToCheck.charCodeAt(0) - 'A'.charCodeAt(0)];

            // (a)前兩碼*(b)前兩碼    
            let sum = (locationNum / 10 >> 0) + (locationNum % 10) * 9;
            // (b)後8碼取得
            let mulArray = [8, 7, 6, 5, 4, 3, 2, 1];
            for (let i = 1; i <= 8; ++i) {
                // (a)後八碼*(b)後八碼
                sum += parseInt(idToCheck.charAt(i)) * mulArray[i - 1];
            }
            // 基數之個位數
            let last = sum % 10;
            //取得檢查碼
            let check = (10 - last) % 10;

            // 驗證最後一碼與檢查碼是否相同
            return parseInt(idToCheck.charAt(idToCheck.length - 1)) === check;

        } else if (isVISAOld) {
            //若為舊式居留證號，則依原設定給過
            return true;
        }
        //若兩者皆非，則直接回傳false
        return false;
    }
}
