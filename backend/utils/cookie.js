const setCookie = (res,tokenName, token) => {
    if(tokenName == "refreshToken"){
        maxAge = 10 * 24 * 60* 60
    }
    else{
        maxAge = 24 * 60 * 60
    }
    res.cookie(`${tokenName}`, token, {
        httpOnly : true,
        secure : true, 
        maxAge
    })
}

const removeCookie = (res) => {
    res.clearCookie("accessToken", {
        httpOnly : true,
        secure : true, 
        maxAge
    }).clearCookie("refreshToken", {
        httpOnly : true,
        secure : true, 
        maxAge
    })
}

export {setCookie, removeCookie}