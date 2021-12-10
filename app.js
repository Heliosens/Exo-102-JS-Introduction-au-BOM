let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2')

btn1.addEventListener("click", function (){
    let features = "menubar=no,location=yes,resizable=yes,scrollbars=yes,status=yes";
    let test = window.open('https://www.tinkercad.com/', "", features);
    test.resizeTo(500, 600);
    test.moveTo(300,100);

    btn2.addEventListener('click', function (){
        test.close();
    })
})

