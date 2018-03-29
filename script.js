function login(userName, pass) {
    var users = [{user: "leigh1981", password: "Burnleyfc81"},{user: "leigh1982", password: "Burnleyfc82"}]; //array of objects
    var valid = null;
    for (i=0;i<users.length;i++) { //iterate possible acceptable user/pass combos
        if (users[i].user == userName && users[i].password == pass) { //compare input with acceptable combos
            valid = 1;// set flag if valid
            break;
        }
    }
    valid == 1 ? alert("Thanks " + userName + ", you are logged in!") : alert("Invalid User!"); //ternary notation practice - if ... ?<then> aaa :<else> bbb
}
