/* var users = [{
    username: 'Marten',
    password: 'Sievers'
},{
    username: 'Marie',
    password: 'Henkelmann'
}] */

// better way to do it, exercise 11.10.18

const user = {
    username: 'Marie',
    password: 'Henkelmann'}

let userString = JSON.stringify(user)

console.log(userString)

localStorage.setItem('User', userString)

localStorage.getItem('User')

console.log(JSON.parse(newUser))

