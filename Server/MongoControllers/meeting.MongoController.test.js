const meetingController = require('./meeting.MongoController');
const UsersModel = require('../Models/users.schema')

const { expect } = require("chai");
const sinon = require("sinon");
describe("meeting with Mongo test", () => {
    afterEach(() => {
        sinon.restore();
    })
    test('get all meeting for user by user id', async () => {
        const id = 1;
        const allMeeting =
            [
                {
                    "id": 1,
                    "date": "12/04/2020",
                    "weight": 65
                },
                {
                    "id": 2,
                    "date": "18/04/2020",
                    "weight": 78
                },
                {
                    "id": 4,
                    "date": "12/04/2020",
                    "weight": 60
                }

            ]
        sinon.stub(UsersModel, 'getAllTheMeetingsForUser').returns(allMeeting);
        const returnMeeting = await meetingController.getAllTheMeetingsForUser(id)
        expect(returnMeeting).to.equal(allMeeting)

    })
})