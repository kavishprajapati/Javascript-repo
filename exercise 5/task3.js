alert("its alert box");
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');

let myColors = ['red', 'green', 'blue'];
let myColors2 = ['red', 'green', 'blue', 'yellow', 'pink'];

let intervalId, box4Index = 0;
box1.innerHTML += `<br><br><br><br><br><br><br><br>Click Me First`;

document.addEventListener('keyup', function (e) {
    let pressedKey = e.code;
    if (pressedKey == 'ArrowUp' || pressedKey == 'ArrowDown' || pressedKey == 'ArrowLeft' || pressedKey == 'ArrowRight') {
        if (pressedKey == 'ArrowUp' || pressedKey == 'ArrowRight') {
            box4Index++;
        }
        else {
            box4Index--;
        }
        clearInterval(intervalId);
        box4ColorChange();

    }
});

function box2ColorChange() {

    let i = 0;

    box2.style.backgroundColor = myColors[i];

    setInterval(() => {
        i++;

        if (i > 2) {
            i = 0;
        }

        box2.style.backgroundColor = myColors[i];
    }
        , 3000);

}

box2ColorChange();

box1.addEventListener('click', box4ColorChange);



function box4ColorChange() {
    document.getElementById('box3').innerHTML = 'Oops Something wrong?'

    if (box4Index > 4) {
        box4Index = 0;
    }
    else if (box4Index < 0) {
        box4Index = 4;
    }
    box4.style.backgroundColor = myColors2[box4Index];

    intervalId = setInterval(() => {
        box4Index++;

        if (box4Index > 4) {
            box4Index = 0;
        }
        else if (box4Index < 0) {
            box4Index = 4;
        }

        box4.style.backgroundColor = myColors2[box4Index];
    }
        , 5000);
}



