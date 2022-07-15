function re(){
    //画像オブジェクトを取得する
    var obj = document.images['imginu'];
   
    //画像の高さを100pxにする
    obj.height = 10;
  }

var imglist = new Array(
    "2-1.jpg",
    "2-2.jpg",
    "2-3.jpg",
    "2-4.jpg",
    "2-5.jpg",
    "2-6.jpg" );
 var selectnum = Math.floor(Math.random() * imglist.length);
 var output = "<img src=" + imglist[selectnum] + ">";
 document.write(output);