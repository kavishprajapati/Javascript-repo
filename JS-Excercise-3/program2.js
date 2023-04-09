let email = prompt("Enter your email");

function hideEmail(email){
    let index = email.indexOf("@");

    let username = email.slice(0, index);

    let domain = email.slice(index + 1);

    let hide_User_name = username.charAt(0) + username.charAt(1) + "*".repeat(username.length -3) + username.charAt(username.length -1); 

    let combine = hide_User_name + "@" + domain;

    return combine;
}

console.log(hideEmail(email));