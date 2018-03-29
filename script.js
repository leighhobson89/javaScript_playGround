function login(userName, pass) {
    var users = [{user: "leigh1981", password: "Burnleyfc81"},{user: "leigh1982", password: "Burnleyfc82"}];
    var valid = null;
    for (i=0;i<users.length;i++) {
        if (users[i].user == userName && users[i].password == pass) {
            valid = 1;
            break;
        }
        else {
            continue;
        }
    }
    if (valid == 1) {
        alert("Thanks " + userName + ", you are logged in!");
    }
    else {
        alert("Invalid User!");
    }
}
