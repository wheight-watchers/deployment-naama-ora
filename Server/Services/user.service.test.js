const UserService = require('./user.service');

test('get user with id 1', () => {
let user =  UserService.getUser("1").then(()=>{
    expect(JSON.stringify(user)).toBe({"id":1,"password":1,"firstName":"Ora","lastName":"Benesh","email":"ob@gmail.com","address":{"city":"maale-Adumim","street":"bialic","building":"5"},"height":"1.7","age":"33","Weights":{"startWeight":77,"meetings":[{"id":1,"date":"12/04/2020","weight":75},{"id":2,"date":"18/04/2020","weight":75},{"id":4,"date":"12/04/2020","weight":10}]},"diary":[{"date":"12/04/2020","summary":[{"Breakfast":["roll","chocolate-milk"]},{"Lunch":["rice","meet","beans"]},{"Dinner":["baget","salad","omlete"]},{"IntermediateSnack":["coffee","chocolate","cookies"]}]},{"date":"13/04/2020","summary":[{"Breakfast":["roll","chocolate-milk"]},{"Lunch":["rice","meet","beans"]},{"Dinner":["baget","salad","omlete"]},{"IntermediateSnack":["coffee","chocolate","cookies"]}]},{"date":"14/04/2020","summary":[{"Breakfast":["banana","apple"]},{"Lunch":["rice","meet","beans"]},{"Dinner":["baget","salad","omlete"]},{"IntermediateSnack":["coffee","chocolate","cookies"]}]}]});
})
});
test('password of user with id 1 to be 1', () => {
    let user = UserService.getUser("1").then(() => {
        expect(JSON.parse(user).password).toBe(1);
    })
});