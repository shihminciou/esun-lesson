import { ValidatorFn, AbstractControl } from '@angular/forms';
import FormatChecker from './formatChecker';

/** see isValidId for more details, validating all kinds of id */
export let CirciKeyValidator: ValidatorFn = (control: AbstractControl): { [key: string]: any } => {
  if (control.value) {
    if (!isValidId(control.value)) {
      return {
        idFormatError: true
      };
    }
  }
};


export function isValidId(id) {
  let isCustID = FormatChecker.isTaiwanId(id); // 身分證
  let isVISA = FormatChecker.isVISAId(id); // #270 新式居留證號前端檢核(新舊共存)
  let taxNumber = /^[0-9]{8}[a-zA-Z]{2}/.test(id); // 稅籍代號
  let unitCreditNew = /^&&[a-zA-Z]{4}[0-9]{4}/.test(id); // 聯徵申報統編 new 編號共10碼，第1、2碼為"&"，第3碼~第6碼為英文字母，第7碼~第10碼為數字型態。
  let unitCreditOld = /^[a-zA-Z]{4}[0-9]{4}/.test(id); // 聯徵申報統編 new 編號共10碼，第1、2碼為"&"，第3碼~第6碼為英文字母，第7碼~第10碼為數字型態。
  let isCompID = /^[0-9]{8}$/.test(id);
  let isOBUID = /^&/.test(id); //工作 18755: & 開頭之後不檢核
  if (!isCompID && !isCustID && !isOBUID && !isVISA && !taxNumber && ! unitCreditNew && !unitCreditOld) {
    return false;
  }
  return true;
}
