
var vm = new Vue({
    el: '#main',
    data: {
        nameApp: 'Crono Travel Diary'
    }
})

logHiOnConsole = function(){
    console.log("Hi");
}

let loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", logHiOnConsole);
