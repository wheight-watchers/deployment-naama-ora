const MeetingService = require('./meeting.service');


// describe("Meeting test", () => {
test('get all meeting for user', () => {
    let meeting = MeetingService.getAllTheMeetingsForUser("1").then(() => {
        expect(JSON.parse(meeting)).toBe([
            {
                "id": 1,
                "date": "12/04/2020",
                "weight": 40
            },
            {
                "id": 2,
                "date": "18/04/2020",
                "weight": 56
            },
            {
                "id": 4,
                "date": "12/04/2020",
                "weight": 70
            }
        ]);
    });
})
// test('', () => {

// })
