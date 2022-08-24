var countEl = document.getElementById("count-el")
var saveEl = document.getElementById("save-el")
var count = 0
function increment() {
    count += 1
    countEl.textContent = count
}


function save() {
    var countStr = count + "-"

    saveEl.textContent += countStr

    console.log(count)
}
 