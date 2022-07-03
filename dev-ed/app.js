'use strict';

console.log("Start");

function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log('testing...')
        callback({userEmail: email, userPass: password});
    }, 1000)
}

function getUserVideos(email, callback) {
    setTimeout(() => {
        callback(["vid1", "vid2", "vid3"]);
    }, 1400)
}

function getVideoDetails(videos, callback) {
    setTimeout(() => {
       callback("Titile of video");
    })
}

const user = loginUser('hanna@gmail', 1234, (user) => {
    console.log(user);
    getUserVideos(user.userEmail, (videos) => {
        console.log(videos);
        getVideoDetails(videos[0], (title) => {
            console.log(title)
        })
    })
});


console.log('Finish');