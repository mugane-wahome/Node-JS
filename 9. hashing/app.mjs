import bcrypt from 'bcrypt'

const password = 'password1'

// becaouse of async function we need to use await

// const salt = bcrypt.genSaltSync(10)
console.time("hash")
const hash = await bcrypt.hashSync(password, 10)

console.timeEnd("hash")

console.log({
    password,
    // salt,
   hash 
})

// comparing the password after it is entered by the user
const isMatch = await bcrypt.compare(password, hash)

console.log(isMatch)
