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

