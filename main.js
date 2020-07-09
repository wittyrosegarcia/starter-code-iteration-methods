// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.

console.log(users)

// Append the katas to this element:
 const main = document.querySelector('main')

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    
     // http://mdn.io/json.stringify
    

    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}
const greenEyes1 = users.filter(user => user.eyeColor === "green")
// OR...
const greenEyes2 = users.filter(function (user){
    return user.eyeColor === "green"
})
printKata(0, greenEyes1)

// Kata 1: Use the .filter() method
//.Filter the users array to show only the users with an isActive property of true.

const isActive = users.filter(function(user){
    return user.isActive = true})


printKata(1, isActive )

// Kata 2: Use the .map() method
// .Map over the users array to show only the email addresses of the users.
 
const email= users.map(user => user.email)
printKata(2, email)


// Kata 3: Use the .some() method
// .Check whether at least one user in the users array has a company property of "OVATION".

const company1 = users.some(function (user) {
    return user.company=== 'OVATION'
})
    printKata(3, company1)


// Kata 4: Use the .find() method
// .Find the first user in the array over the age of 38.

const ageOver38 = users.find(function (user){
    return user.age > 38 })

printKata(4, ageOver38)

// Kata 5: Use the .filter() and .find() methods
// .Find the first user in the array over the age of 38 who is active.

const firstUserAgeOver38IsActive = users
    .filter(user => user.isActive === true)
    .find(user => user.age > 38)                                      
    
printKata(5, firstUserAgeOver38IsActive)  


// Kata 6: Use the .filter() and .map() methods
// .Show the balance of every user in the array from the "ZENCO" company.

const showUserBalanceCompany = users
.filter(user => user.company === 'ZENCO')
.map(user => user.balance)   

printKata(6, showUserBalanceCompany)

// Kata 7: Use the .filter() method with .includes() and the .map() method
// .Show the age of every user with the "fugiat" tag.
// kata 7
const showAgeUserTag = users
.filter(user => user.tags.includes('fugiat'))
.map(user => user.age) 

printKata(7, showAgeUserTag )
