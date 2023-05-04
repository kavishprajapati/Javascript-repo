// getting current user state
let myCurrentUserObj = JSON.parse(localStorage.getItem("myCurrentUser"));

// setting up the table
let table = document.getElementById("myTable");
document.getElementById('HeadPara').innerHTML = myCurrentUserObj.email;

function showCourses() {
    const allCourses = loadAllUserCourses();
    const myCourses = allCourses.filter(course => course.email === myCurrentUserObj.email);
    const coursesBox = document.getElementById('coursesBox');

    for (let i = 1; i <= myCourses.length; i++) {
        let card = `<div class="course-card" style="background-color: ${getRandomColor()}">${myCourses[i - 1].courseName}</div>`;
        coursesBox.innerHTML += card
    }
}
showCourses();

// hooking loutout button
let logOutBtn = document.getElementById("myLogOutBtn");
logOutBtn.addEventListener("click", logOutFunc);

function logOutFunc() {
    window.location.assign("task1.html");
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}