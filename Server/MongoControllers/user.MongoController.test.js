const userController = require('./user.MongoController');
const UsersModel = require('../Models/users.schema')

describe("users with mongo", () => {

    //   beforeAll(async () => {
    //   });

    //   afterAll(async () => {
    //   });

    it('should insert a user into users table', async () => {
        const users = await UsersModel.find();
        const mockUser = {
            "id": 6,
            "password": 6,
            "firstName": "Ruthy",
            "lastName": "Benesh",
            "email": "ob@gmail.com",
            "address": [
                {
                    "city": "maale-Adumim",
                    "street": "bialic",
                    "building": "5",
                    "_id": "62d6a04bae3e369f7a1de8f4"
                }
            ],
            "height": "1.7",
            "age": "16",
            "Weights": [
                {
                    "startWeight": 77,
                    "meetings": [
                        {
                            "date": "12/04/2020",
                            "weight": 75,
                            "_id": "62d6a04bae3e369f7a1de8f6"
                        },
                        {
                            "date": "18/04/2020",
                            "weight": 75,
                            "_id": "62d6a04bae3e369f7a1de8f7"
                        },
                        {
                            "date": "12/04/2020",
                            "weight": 10,
                            "_id": "62d6a04bae3e369f7a1de8f8"
                        }
                    ],
                    "_id": "62d6a04bae3e369f7a1de8f5"
                }
            ],
            "diary": [
                {
                    "summary": {
                        "BreakFast": [],
                        "Lunch": [],
                        "Dinner": [],
                        "IntermediateSnack": []
                    },
                    "date": "12/04/2020",
                    "_id": "62d6a04bae3e369f7a1de8f9"
                },
                {
                    "summary": {
                        "BreakFast": [],
                        "Lunch": [],
                        "Dinner": [],
                        "IntermediateSnack": []
                    },
                    "date": "13/04/2020",
                    "_id": "62d6a04bae3e369f7a1de8fa"
                },
                {
                    "summary": {
                        "BreakFast": [],
                        "Lunch": [],
                        "Dinner": [],
                        "IntermediateSnack": []
                    },
                    "date": "14/04/2020",
                    "_id": "62d6a04bae3e369f7a1de8fb"
                }
            ]
        };
        await users.insertOne(mockUser);
        const insertedUser = await users.findOne({ id: '6' });
        expect(insertedUser).toEqual(mockUser);
    }
    ,10000
    );
});

// describe("Users with Mongo test", () => {
//     test('get all users', () => {

//         // sinon.stub(UsersModel, 'findOne').returns(userObject);
//         // const returnedUser = await userController.getUserById(id);
//         // expect(returnedUser.firstName).toequal(userObject.firstName);

        // const users = [{name: 'Bob'}];
        // const resp = {data: users};
        // userController.getUserById.mockResolvedValue(resp);
        // return userController.getUserById().then(data => expect(data).toEqual(users));

        // let meeting = MeetingService.getAllTheMeetingsForUser('1').then(() => {
        //     expect(JSON.parse(meeting)).toBe([
        //         {
        //             "id": 1,
        //             "date": "12/04/2020",
        //             "weight": 40
        //         },
        //         {
        //             "id": 2,
        //             "date": "18/04/2020",
        //             "weight": 56
        //         },
        //         {
        //             "id": 4,
        //             "date": "12/04/2020",
        //             "weight": 70
        //         }
        //     ]);
        // });
//     })

// })
