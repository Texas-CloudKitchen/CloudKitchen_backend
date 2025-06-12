import bcrypt from "bcryptjs"
const hashPassword = async(password) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
}

const verifyPassword = async(password, hashedPassword) => {
    const isSame = await bcrypt.compare(password, hashedPassword)
    return isSame
}

export {hashPassword, verifyPassword}