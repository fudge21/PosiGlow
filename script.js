var random = Math.floor(Math.random()*20)+1

document.querySelector("#icon").style.backgroundPosition = `0 ${100*random}%`

document.querySelector('#postmaker textarea').addEventListener('focus', () => {
    document.querySelector("#postlist").style.opacity = 0
     document.querySelector("#post").style.top = "82.5%"
});

document.querySelector('#postmaker textarea').addEventListener('blur', () => {
    document.querySelector("#postlist").style.opacity = 1
     document.querySelector("#post").style.top = "17%"
});

document.querySelector("#hamburgerButton").addEventListener("click", function () {
    if (document.querySelector("#hamburgerNavigator div").style.display == "block") {
        document.querySelector("#hamburgerNavigator div").style.display = "none"
    } else {
        document.querySelector("#hamburgerNavigator div").style.display = "block"
    }
})