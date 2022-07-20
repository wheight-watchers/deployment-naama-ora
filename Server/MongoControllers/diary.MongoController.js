const db = require('../DB/dataBase');
const userModel = require('../Models/users.schema');

module.exports = {
    getDiaryByUserId: async function (req, res) {
        if (req.params.id) {
            try {
                const id = req.params.id;
                const user = await userModel.findOne({ id });
                res.status(200).send(user.diary);
            } catch (error) {
                res.status(500).send(`oofffffffff ${error}`);
            }
        }
    },
    addDiary: async function (req, res) {

    },
    updateDiary: async function (req, res) {
       
    },
    deleteDairy: async function (req, res) {
    
    }
}