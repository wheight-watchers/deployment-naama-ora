const DiaryService = require('./diary.service');

test('get diary of user with id 1', () => {
    let diary = DiaryService.getDiary("1").then((diary) => {
        expect(JSON.parse(diary)).toBe([
            {
                "date": "12/04/2020",
                "summary": [
                    {
                        "Breakfast": [
                            "roll",
                            "chocolate-milk"
                        ]
                    },
                    {
                        "Lunch": [
                            "rice",
                            "meet",
                            "beans"
                        ]
                    },
                    {
                        "Dinner": [
                            "baget",
                            "salad",
                            "omlete"
                        ]
                    },
                    {
                        "IntermediateSnack": [
                            "coffee",
                            "chocolate",
                            "cookies"
                        ]
                    }
                ]
            },
            {
                "date": "13/04/2020",
                "summary": [
                    {
                        "Breakfast": [
                            "roll",
                            "chocolate-milk"
                        ]
                    },
                    {
                        "Lunch": [
                            "rice",
                            "meet",
                            "beans"
                        ]
                    },
                    {
                        "Dinner": [
                            "baget",
                            "salad",
                            "omlete"
                        ]
                    },
                    {
                        "IntermediateSnack": [
                            "coffee",
                            "chocolate",
                            "cookies"
                        ]
                    }
                ]
            },
            {
                "date": "14/04/2020",
                "summary": [
                    {
                        "Breakfast": [
                            "banana",
                            "apple"
                        ]
                    },
                    {
                        "Lunch": [
                            "rice",
                            "meet",
                            "beans"
                        ]
                    },
                    {
                        "Dinner": [
                            "baget",
                            "salad",
                            "omlete"
                        ]
                    },
                    {
                        "IntermediateSnack": [
                            "coffee",
                            "chocolate",
                            "cookies"
                        ]
                    }
                ]
            }
        ]);
    })
});
