if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', update)
} 
else{
    update()
}
//jakies gowno zeby to dzialalo caly czas

function getE(id){
    return document.getElementsByClassName(id);
}
//shortcut

var sounds = {
    clap : new Audio("01 - JavaScript Drum Kit_sounds_clap.wav"),
    hihat : new Audio("01 - JavaScript Drum Kit_sounds_hihat.wav"),
    kick : new Audio("01 - JavaScript Drum Kit_sounds_kick.wav"),
    openhat : new Audio("01 - JavaScript Drum Kit_sounds_openhat.wav"),
    boom : new Audio("01 - JavaScript Drum Kit_sounds_boom.wav"),
    ride : new Audio("01 - JavaScript Drum Kit_sounds_ride.wav"),
    snare : new Audio("01 - JavaScript Drum Kit_sounds_snare.wav"),
    tom : new Audio("01 - JavaScript Drum Kit_sounds_tom.wav"),
    tink : new Audio("01 - JavaScript Drum Kit_sounds_tink.wav")
}


function update(){

    let list = getE("skladnik")
    for(var i=0; i<= list.length; i++){
        let obj = list[i]
        if(obj){
            obj.addEventListener('click', work)
            document.addEventListener('keydown', keyboardclick)
        }
    }
    
}
function play(note){
    clearname = String(note.innerText)
    sounds[clearname].cloneNode(true).play()
}

function animation(skladnik){
    skladnik.classList.add("clicked")
    skladnik.addEventListener('transitionend', removeanim=>{skladnik.classList.remove('clicked')})
}

function work(){
    sname = this.getElementsByClassName("nazwa")[0]
    play(sname)
    animation(sname.parentElement)
}

function keyboardclick(event){
    let list = getE("skladnik")
    for(var i=0; i<= list.length; i++){
        let obj = list[i]
        if(obj){
            let letter = obj.querySelector("kbd").innerText.toLowerCase()
            if(letter == event.key){
                sname = obj.getElementsByClassName("nazwa")[0]
                play(sname)
                animation(sname.parentElement)
            }
        }
    }
}

