var pics_src = new Array ("1.5-1.jpg", "1.5-2.jpg");
      var num = 0;

      function slideshow(){
           if (num == 1) {
               num = 0;
           }
           else {
               num ++;
           }
           document.getElementById("mypic").src=pics_src[num];
       }