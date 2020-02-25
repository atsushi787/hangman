 // フィールドが変更された場合に処理する関数
  2: function fieldChanged(){
  3:     var userId = getField("user_id");
  4:     var password = getField("password");
  5:     var disabled = true;
  6:     
  7:     if (userId.value.length > 0 && password.value.length > 0) {
  8:         disabled = false;
  9:     }
 10:     
 11:     var login = getField("login");
 12:     if (disabled) {
 13:         login.setAttribute("disabled", "disabled");
 14:     }
 15:     else {
 16:         login.removeAttribute("disabled");
 17:     }
 18: }
 19: 
 20: // フィールドを取得する関数
 21: function getField(fieldName){
 22:     var field = document.getElementById(fieldName);
 23:     if (field == undefined) {
 24:         throw new Error("要素が見つかりません: " + fieldName);
 25:     }
 26:     return field;
 27: }
