const express = require("express");
const User = require("../model/UserSchema");
const Data = require("../model/DataSchema");
const router = express.Router();
const moment = require("moment");
const bcrypt = require("bcrypt");
const { route } = require("express/lib/router");

router.post("/login", async (req, res) => {
    const { group, password } = req.body;
    try {
        const data = await User.find({ group: group });
        if (!data.length) {
            return res.json(
                "#E52D50:white:The TeamName is Incorrect please try again"
            );
        }
        const encrypt = bcrypt.compareSync(password, data[0].password);
        if (!encrypt) {
            return res.json(
                "#E52D50:white:The Password is Incorrect please try again"
            );
        }
        const id = data[0]._id;
        const check = await Data.find({ id: id });
        if (check.length) {
            return res.json({ data, alert: "greenyellow:black:Login Successful" });
        }
        const response = await new Data({ id: id, group: group });
        await response.save();
        res.json({ data, alert: "greenyellow:black:Login Successful" });
    } catch (error) {
        return res.send(error);
    }
});
router.post("/submit", async (req, res) => {
    const { id, answer, target } = req.body;
    try {
        const currentTime = moment().format("h:mm:ss a");
        const answerArray = [
            "csi-ctf{pR0videncE_$4ys_He110}",
            "csi-ctf{congratulations_the_flag_is_jira}",
            "csi-ctf{this_is_the_flag_codecocomo}",
            "csi-ctf{MORSEINTERSTELLAR}",
            "csi-ctf{eXploIted_wEb}",
            "csi-ctf{CPL-CSI}",
            "csi-ctf{Let's_go_to_the_subway_for_lunch}",
            "csi-ctf{sequential_flag}",
            "csi-ctf{@CSIDMCECTF#}"
        ];
        const check = answerArray.filter((ele) => {
            return ele === answer;
        });
        if (!check.length) {
            return res.json("#E52D50:white:Incorrect");
        }
        const findData = await Data.find({ answer: answer, id: id });
        const array = findData[0].solution.filter((e) => {
            return e.answer === answer;
        });
        if (array.length) {
            return res.json("greenyellow:black:Your Answer has already been Stored");
        }
        await Data.updateOne(
            { id: id },
            {
                $push: {
                    solution: { answer: answer, target: target, time: currentTime },
                },
            }
        );
        res.json("greenyellow:black:Correct");
    } catch (error) {
        res.send(error);
    }
});
router.post("/site-target", async (req, res) => {
    const { id } = req.body;
    try {
        const findTarget = await Data.find({ id: id });
        const findArray = findTarget[0].solution.filter((e) => {
            return e;
        });
        res.json(findArray);
    } catch (error) {
        res.send(error);
    }
});
module.exports = router;