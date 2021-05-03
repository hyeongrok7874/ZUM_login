document.getElementById("login").onclick = login;

let user = {
    username: "username",
    password: "12345678"
};

function login() {
    let id = document.getElementById("id").value;
    let password = document.getElementById("password").value;

    if (id == user.username && password == user.password) {
        alert("로그인에 성공하셨습니다");
    }
    else {
        alert("아이디 또는 비밀번호가 잘못 되었습니다.");
    }
};