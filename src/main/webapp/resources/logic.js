
var vm = new Vue({
    el: '#main',
    data: {
        nameApp: 'Travel Diary'
    }
})

logHiOnConsole = function(){
    console.log("Hi");
}

let loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", logHiOnConsole);
