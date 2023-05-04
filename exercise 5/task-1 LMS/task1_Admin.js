
let count = 1;
let table = document.getElementById('myTable');
let btn = document.getElementById('myBtnId');
let email = document.getElementById('myEmail');
let courseName = document.getElementById('myCourseName');

btn.addEventListener('click', createCourse);

let newRow, cell1, cell2, cell3;

let courseEmailObj = JSON.parse(localStorage.getItem('globalKey') ?? '{}');

let myCourses = [];

function createTable() {
    let userCourses = loadAllUserCourses();
    console.log({ userCourses })

    // delete all courses row first, except heading row
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    // redraw all rows with the  usercourse list
    for (let i = 1; i <= userCourses.length; i++) {
        const currentCourse = userCourses[i - 1];

        // insert row and cells
        newRow = table.insertRow(i);
        cell1 = newRow.insertCell(0);
        cell2 = newRow.insertCell(1);
        cell3 = newRow.insertCell(2);

        // populate data
        cell1.innerHTML = currentCourse.courseName;
        cell2.innerHTML = currentCourse.email;
        cell3.innerHTML = `<button class= "btn btn-danger" onclick = 'deleteCourse(${currentCourse.id})'>Delete Course</button>`;
    }
}

createTable();

//create Cource - add btn
function createCourse(e) {
    e.preventDefault();

    // basic input validation
    if (email.value == '' || courseName.value == '') {
        alert('Please enter The Email address and Course Name');
        return;
    }

    // email validation (email should exists)
    const matchedUser = getUserFromEmail(email.value);
    console.log({ matchedUser })
    if (!matchedUser) {
        alert('The entered email does not exist with any user');
        return;
    }

    // email validation (email should not be admin)
    if (matchedUser.isAdmin) {
        alert('The entered email is admin');
        return;
    }

    // load userCourses data and append new course
    let userCourses = loadAllUserCourses();
    userCourses.push({
        courseName: courseName.value,
        email: email.value,
        id: +new Date()
    });
    localStorage.setItem("myAllUserCourses", JSON.stringify(userCourses));

    // again draw table with new data
    createTable();

    // reset form fields
    email.value = '';
    courseName.value = '';
}

function deleteCourse(id) {
    // load userCourses data and append new course
    let userCourses = loadAllUserCourses();
    userCourses = userCourses.filter(uc => uc.id !== id);
    localStorage.setItem("myAllUserCourses", JSON.stringify(userCourses));

    // again draw table with new data
    createTable();
}


let logOutBtn = document.getElementById("myLogOutBtn");
logOutBtn.addEventListener("click", logOutFunc);

function logOutFunc() {
    window.location.assign("task1.html");
}