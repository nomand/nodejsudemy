let getUser = (id, callback) => 
{
    let user = {
        id: id,
        name: 'Doe'
    }
    callback(user);
}

getUser(31, (userObject) => {
    console.log(userObject);
});