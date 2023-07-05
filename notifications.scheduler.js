
var request = require('request');
if(process.env.NODE_ENV && process.env.NODE_ENV === "dev") {
    require("dotenv").config({ path: "development.env"});
}
else {
    require("dotenv").config();
}

const apiEndpoint = `${process.env.SCHEDULERAPIURL}/runReminder`;
const post = async function() {
    return await request.post(
        apiEndpoint,
        async function (error, response, body) {
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
    console.log('response ', res);
})