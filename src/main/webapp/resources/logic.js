
var vm = new Vue({
    el: '#body',
    data: {
        nameApp: 'Travel Diary'
    }
})

logHiOnConsole = function(){
    console.log("Hi");
}

let loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", logHiOnConsole);
