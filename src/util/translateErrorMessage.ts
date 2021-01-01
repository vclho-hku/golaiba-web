export default function translateErrorMessage(error: any) {
  let msg = '';
  if (error.code) {
    switch (error.code) {
      case 'auth/email-already-in-use':
        msg = '電郵地址已被注冊，請用其他電郵地址或嘗試登入。';
        break;
      case 'auth/invalid-email':
        msg = '電郵地址格式不正確，請再確認一下。';
        break;
      case 'auth/operation-not-allowed':
        msg = '注冊禁止，請聯繫客服解封。';
        break;
      case 'auth/weak-password':
        msg = '密碼太簡單，請用比較長及包含大小寫字母。';
        break;
      default:
        msg = `CODE ${error.code}: 對不起，系統出錯，請稍候再試。`;
    }
  } else {
    msg = 'CODE 0001: 對不起，系統出錯，請稍候再試。';
  }
  return msg;
}
