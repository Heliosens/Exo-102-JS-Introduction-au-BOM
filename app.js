let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2')

btn1.addEventListener("click", function (){
    let features = "menubar=no,location=yes,resizable=yes,with=500px,height=500px,scrollbars=yes,status=yes";
    let test = window.open('https://www.tinkercad.com/', "", features);
    test.resizeTo(500, 600);
    test.moveBy(500,100);

    btn2.addEventListener('click', function (){
        test.close();
    })
})

