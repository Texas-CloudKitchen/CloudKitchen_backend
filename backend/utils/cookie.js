const setCookie = (res,tokenName, token) => {
    if(tokenName == "refreshToken"){
        var maxAge = 10 * 24 * 60* 60 * 1000
    }
    else if(tokenName == "accessToken"){
        var maxAge = 24 * 60 * 60 * 1000
    }
    res.cookie(`${tokenName}`, token, {
        httpOnly : true,
        secure : false, 
        // sameSite : "strict",
        maxAge
    })
}

const removeCookie = (res) => {
    res.clearCookie("accessToken")
    res.clearCookie("refreshToken")
}

export {setCookie, removeCookie}