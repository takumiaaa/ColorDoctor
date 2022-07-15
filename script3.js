let change = document.getElementById('change_c');

change.addEventListener('click', function () {
    let num1 = Math.floor(Math.random() * 256),// R:乱数1
        num2 = Math.floor(Math.random() * 256),// G:乱数2
        num3 = Math.floor(Math.random() * 256),// B:乱数3
        color = "rgb(" + num1 + "," + num2 + "," + num3 + ")";//RGB
    // console.log(color);
    // console.log(num1);
    // console.log(num2);
    // console.log(num3);
    document.getElementById('box').style.backgroundColor = color;
// #boxのbackground-colorに変数colorを代入
    let change2 = document.getElementById('change_c-2');

    change2.addEventListener('click', function () {
        let num4 = Math.floor(Math.random() * 256),// R:乱数1
            num5 = Math.floor(Math.random() * 256),// G:乱数2
            num6 = Math.floor(Math.random() * 256),// B:乱数3
            color1 = "rgb(" + num4 + "," + num5 + "," + num6 + ")";//RGB
        // console.log(color1);
        // console.log(num4);
        // console.log(num5);
        // console.log(num6);
        document.getElementById('box2').style.backgroundColor = color1;
// #boxのbackground-colorに変数colorを代入
        let change3 = document.getElementById('change_c-3');

        change3.addEventListener('click', function () {
            let num7 = (num1 + num4)/2,// R:乱数1
                num8 = (num2 + num5)/2,// G:乱数2
                num9 = (num3 + num6)/2,// B:乱数3
                color3 = "rgb(" + num7 + "," + num8 + "," + num9 + ")";//RGB
            document.getElementById('box3').style.backgroundColor = color3;
        // #boxのbackground-colorに変数colorを代入
        });
    });
});


