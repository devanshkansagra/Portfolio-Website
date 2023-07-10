// Nav Bar Effect
let navLink = document.querySelectorAll(".nav-link");
let makeReg = () => {
    Array.from(navLink).forEach((link) => {
        link.style.color = 'white';
    });
};

Array.from(navLink).forEach((link) => {
    link.addEventListener('click', (x) => {
        makeReg();
        x.target.style.color = '#27AE60';
    });
});

// Type Effect
setTimeout(() => {
    var txt = 'Devansh'
    let txtArr = txt.split("");
    let speed = 80;
    txtArr.forEach((item, index) => {
        setTimeout(() => {
            document.getElementById('demo').innerText += item;
        }, speed * index);
    });
}, 500);

setTimeout(() => {
    var txt = 'Kansagra.'
    let txtArr3 = txt.split("");
    let speed3 = 80;
    txtArr3.forEach((item3, index3) => {
        setTimeout(() => {
            document.getElementById('demo3').innerText += item3;
        }, speed3 * index3);
    });
}, 1000);

var txt2 = 'Developer'
let txtArr2 = txt2.split("");
let speed2 = 80;

setTimeout(() => {
    txtArr2.forEach((item2, index2) => {
        setTimeout(() => {
            document.getElementById('demo2').innerHTML += item2;
        }, speed2 * index2);
    });
}, 2000);

