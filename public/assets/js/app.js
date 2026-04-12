function startSession(){

fetch("/start-session")

.then(res=>res.json())

.then(data=>{

alert("Silence session started")

})

}
