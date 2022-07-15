//cookieを読み込む
function readCookie(){
    //cookieのhensuの値を返す
    var name ="hensu" + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++){
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(name ) == 0){
    return c.substring(name.length,c.length);
    };
    };
    return null;
    };