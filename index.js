var countEl = document.getElementById("count-el")
var count = 0
function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    console.log(count)
}
 