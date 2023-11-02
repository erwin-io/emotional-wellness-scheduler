
var request = require('request');
// if(process.env.NODE_ENV && process.env.NODE_ENV === "dev") {
//     require("dotenv").config({ path: "development.env"});
// }
// else {
//     require("dotenv").config();
// }

require("dotenv").config({ path: "development.env"});

const apiEndpoint = `${process.env.SCHEDULERAPIURL}/runReminder`;
const post = async function() {
    return await request.get(
        apiEndpoint,
        async function (error, response, body) {
            console.log("error", error);
            if (!error && response.statusCode == 200) {
                return {
                    error,
                    body,
                    response
                };
            }
        }
    );
};
post().then(res => {
    console.log('response ', res.error);
})