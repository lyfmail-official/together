function startSession(){

let seconds = 120

const interval = setInterval(()=>{

seconds--

document.body.innerHTML =
"<h1>Silence Session</h1>" +
"<p>"+seconds+" seconds remaining</p>"

if(seconds<=0){

clearInterval(interval)

document.body.innerHTML =
"<h1>Session Complete</h1>" +
"<p>Take a deep breath.</p>"

}

},1000)

}
