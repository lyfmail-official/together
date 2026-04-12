const ws = new WebSocket("ws://localhost:3000")

ws.onmessage = function(event){

let data = JSON.parse(event.data)

document.getElementById("presence").innerHTML =
"People Present: " + data.count

}
