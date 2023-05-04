const loadAllUsers = () => {
    const allUsersStringData = localStorage.getItem('myAllUser') ?? '[]';
    const allUsers = JSON.parse(allUsersStringData);
    return allUsers;
}

/**
 * 
 * [
    *  {
        * id: '',
        * courseName: '',
        * email: '',
    *  },
    * {
        * id: '',
        * courseName: '',
        * email: '',
    *  },
 * ]
 */
function loadAllUserCourses() {
    const allUserCoursesStringData = localStorage.getItem('myAllUserCourses') ?? '[]';
    const allUserCourses = JSON.parse(allUserCoursesStringData);
    return allUserCourses;
}
/**
 * User object : {
 *  email: string,
 *  password: string,
 *  isAdmin: boolean,
 * }
 */
function getUserFromEmail(email) {
    console.log({ email });
    const allUsers = loadAllUsers();
    console.log({ allUsers })
    return allUsers.find(user => user.email === email);
}