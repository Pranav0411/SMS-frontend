export const loggedIn = () => {
    let data = localStorage.getItem("data");
    if (data != null) {

        return true;
    }
    else {
        return false;
    }

};


export const doLogin = (data , next) => {

    localStorage.setItem("data", JSON.stringify(data));
    next()

};


export const loggedOut = (next) => {
    localStorage.removeItem("data");
    next()

};

export const getCurrentUser = () => {
    if (loggedIn()) {
        return JSON.parse(localStorage.getItem("data")).user;

    }
    else {
        return undefined;
    }

};