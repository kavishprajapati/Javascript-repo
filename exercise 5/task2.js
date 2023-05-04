
let myArray = ["rahish Shah",
    "Rashmin Chhatrala",
    "Yash Dubey",
    "Prakash Jain",
    "Yashraj Singh",
    "Viraj Sinha",
    "Rajesh Kumar",
    "Mahesh Marwadi",
    "Suresh Sahni",
    "Amar Vilas",
    "Virdas Singhania",
    "Rajeshwari Bindra",
    "Birendra Bhalerao",
    "Virendra Bhupati",
    "Bhupendra Singh",
    "Bhuvam Bam",
    "Shri Raj",
    "Prashant Kamle",
    "Kamlesh Tomar",
    "Risabh Khare",
    "Rishi Kohli",]



let myDiv = document.getElementById('myDiv');
let myInput = document.getElementById('myInput');

function display(myArray) {
    myDiv.innerHTML = "";
    for (let i = 0; i < myArray.length; i++) {
        myDiv.innerHTML += `${myArray[i]} <br>`;
    }
}

display(myArray);

function charCheckFunc() {
    const inputValue = myInput.value.toLowerCase().trim();
    if (inputValue.length < 2) {
        display(myArray);
        return;
    };

    myDiv.innerHTML = "";

    for (let i = 0; i < myArray.length; i++) {
        const currentArrValue = myArray[i].toLowerCase();
        if (currentArrValue.includes(inputValue)) {
            // currentArrValue = Vivek Kotecha
            // inputValue = vek

            // startIndex = 2
            const startIndex = currentArrValue.indexOf(inputValue);
            const endIndex = startIndex + inputValue.length;

            const prefix = currentArrValue.slice(0, startIndex);
            const suffix = currentArrValue.slice(endIndex);

            myDiv.innerHTML += `${prefix}<mark>${inputValue}</mark>${suffix} <br>`;

        }

    }

}


