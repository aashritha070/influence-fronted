export const LoginStart = (UserCredetials) =>({

    type: "LOGIN",
});

export const LoginDone = (user) =>({

    type: "LOGIN_DONE",
    payload:user,
});

export const LoginNotDone = () =>({

    type: "LOGIN_NOT_DONE",
});

export const Logout =()=>({
    type:"LOGOUT",

});