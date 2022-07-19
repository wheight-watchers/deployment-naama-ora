const meetingController = require('./meeting.MongoController');
const UsersModel = require('../Models/users.schema')

const { expect } = require("chai");
const sinon = require("sinon");
describe("meeting with Mongo test", () => {
    afterEach(() => {
        sinon.restore();
    })
    test('get all meeting for user by user id', async () => {
        const id = '62d6d7e90c9ec19c5efb4dc9';
        const allMeeting =
        [
            {
              "id": 1,
              "password": 1,
              "firstName": "Ora",
              "lastName": "Benesh",
              "email": "ob@gmail.com",
              "address": {
                "city": "maale-Adumim",
                "street": "bialic",
                "building": "5"
              },
              "height": "1.7",
              "age": "33",
              "Weights": {
                "startWeight": 77,
                "meetings": [
                  { "id": 1, "date": "12/04/2020", "weight": 75 },
                  { "id": 2, "date": "18/04/2020", "weight": 75 },
                  { "id": 4, "date": "12/04/2020", "weight": 10 }
                ]
              },
              "diary": [
                {
                  "date": "12/04/2020",
                  "summary": [
                    { "Breakfast": ["roll", "chocolate-milk"] },
                    { "Lunch": ["rice", "meet", "beans"] },
                    { "Dinner": ["baget", "salad", "omlete"] },
                    { "IntermediateSnack": ["coffee", "chocolate", "cookies"] }
                  ]
                },
                {
                  "date": "13/04/2020",
                  "summary": [
                    { "Breakfast": ["roll", "chocolate-milk"] },
                    { "Lunch": ["rice", "meet", "beans"] },
                    { "Dinner": ["baget", "salad", "omlete"] },
                    { "IntermediateSnack": ["coffee", "chocolate", "cookies"] }
                  ]
                },
                {
                  "date": "14/04/2020",
                  "summary": [
                    { "Breakfast": ["banana", "apple"] },
                    { "Lunch": ["rice", "meet", "beans"] },
                    { "Dinner": ["baget", "salad", "omlete"] },
                    { "IntermediateSnack": ["coffee", "chocolate", "cookies"] }
                  ]
                }
              ]
            },
            {
              "id": 2,
              "password": 2,
              "firstName": "Shimon",
              "lastName": "Cohen",
              "email": "sc@gmail.com",
              "address": { "city": "Tel-aviv", "street": "arlozerov", "building": "5" },
              "height": 1.7,
              "age": 33,
              "Weights": {
                "startWeight": 77,
                "meetings": [
                  { "id": 1, "date": "12/04/2020", "weight": 65 },
                  { "id": 2, "date": "18/04/2020", "weight": 78 },
                  { "id": 4, "date": "12/04/2020", "weight": 60 }
                ]
              },
              "diary": [
                {
                  "date": "12/04/2020",
                  "summary": [
                    { "Breakfast": ["roll", "chocolate-milk"] },
                    { "Lunch": ["rice", "meet", "beans"] },
                    { "Dinner": ["baget", "salad", "omlete"] },
                    { "IntermediateSnack": ["coffee", "chocolate", "cookies"] }
                  ]
                },
                {
                  "date": "13/04/2020",
                  "summary": [
                    { "Breakfast": ["roll", "chocolate-milk"] },
                    { "Lunch": ["rice", "meet", "beans"] },
                    { "Dinner": ["baget", "salad", "omlete"] },
                    { "IntermediateSnack": ["coffee", "chocolate", "cookies"] }
                  ]
                },
                {
                  "date": "14/04/2020",
                  "summary": [
                    { "Breakfast": ["roll", "chocolate-milk"] },
                    { "Lunch": ["rice", "meet", "beans"] },
                    { "Dinner": ["baget", "salad", "omlete"] },
                    { "IntermediateSnack": ["coffee", "chocolate", "cookies"] }
                  ]
                }
              ]
            },
            {
              "id": 3,
              "password": 3,
              "firstName": "Levy",
              "lastName": "Cohen",
              "email": "lc@gmail.com",
              "address": { "city": "Tel-aviv", "street": "yafo", "building": "5" },
              "height": "1.7",
              "age": "33",
              "Weights": {
                "startWeight": 60,
                "meetings": [
                  { "id": 1, "date": "12/04/2020", "weight": 40 },
                  { "id": 2, "date": "18/04/2020", "weight": 56 },
                  { "id": 4, "date": "12/04/2020", "weight": 70 }
                ]
              },
              "diary": [
                {
                  "date": "12/04/2020",
                  "summary": [
                    { "Breakfast": ["roll", "chocolate-milk"] },
                    { "Lunch": ["rice", "meet", "beans"] },
                    { "Dinner": ["baget", "salad", "omlete"] },
                    { "IntermediateSnack": ["coffee", "chocolate", "cookies"] }
                  ]
                },
                {
                  "date": "13/04/2020",
                  "summary": [
                    { "Breakfast": ["roll", "chocolate-milk"] },
                    { "Lunch": ["rice", "meet", "beans"] },
                    { "Dinner": ["baget", "salad", "omlete"] },
                    { "IntermediateSnack": ["coffee", "chocolate", "cookies"] }
                  ]
                },
                {
                  "date": "14/04/2020",
                  "summary": [
                    { "Breakfast": ["roll", "chocolate-milk"] },
                    { "Lunch": ["rice", "meet", "beans"] },
                    { "Dinner": ["baget", "salad", "omlete"] },
                    { "IntermediateSnack": ["coffee", "chocolate", "cookies"] }
                  ]
                }
              ]
            },
            {
              "id": 4,
              "password": 4,
              "firstName": "Yehuda",
              "lastName": "Cohen",
              "email": "yc@gmail.com",
              "address": { "city": "Ramat-Gan", "street": "Harohe", "building": "5" },
              "height": 1.7,
              "age": 33,
              "Weights": {
                "startWeight": 85,
                "meetings": [
                  { "id": 1, "date": "12/04/2020", "weight": 67 },
                  { "id": 2, "date": "18/04/2020", "weight": 78 },
                  { "id": 4, "date": "12/04/2020", "weight": 45 }
                ]
              },
              "diary": [
                {
                  "date": "12/04/2020",
                  "summary": [
                    { "Breakfast": ["roll", "chocolate-milk"] },
                    { "Lunch": ["rice", "meet", "beans"] },
                    { "Dinner": ["baget", "salad", "omlete"] },
                    { "IntermediateSnack": ["coffee", "chocolate", "cookies"] }
                  ]
                },
                {
                  "date": "13/04/2020",
                  "summary": [
                    { "Breakfast": ["roll", "chocolate-milk"] },
                    { "Lunch": ["rice", "meet", "beans"] },
                    { "Dinner": ["baget", "salad", "omlete"] },
                    { "IntermediateSnack": ["coffee", "chocolate", "cookies"] }
                  ]
                },
                {
                  "date": "14/04/2020",
                  "summary": [
                    { "Breakfast": ["roll", "chocolate-milk"] },
                    { "Lunch": ["rice", "meet", "beans"] },
                    { "Dinner": ["baget", "salad", "omlete"] },
                    { "IntermediateSnack": ["coffee", "chocolate", "cookies"] }
                  ]
                }
              ]
            }
          ]
        sinon.stub(UsersModel, 'findById').returns(allMeeting);
        const returnMeeting = await meetingController.getAllTheMeetingsForUser(id)
        expect(returnMeeting).to.equal(allMeeting.Weights[0].meetings)

    })
})