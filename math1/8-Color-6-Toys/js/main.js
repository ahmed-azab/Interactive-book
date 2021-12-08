let myAudio = new Audio('../Audio/Count and match.mp3');
myAudio.play();
mice.addEventListener('click',()=>{
    myAudio.play();
})


document.querySelectorAll('.text-box').forEach((elem)=>{
    elem.addEventListener('input',(e)=>{
        if (elem.value == 1) {
            document.getElementById('validate-message').style.color = 'green' ;
             document.getElementById('like-icon').classList = 'fas fa-thumbs-up' ;
            $("#validate-message").animate({left: '10px'});
            const items =  [
            '../Audio/Excellent.mp3' ,
            '../Audio/Good job.mp3',
            '../Audio/Super genius.mp3',
            ];
            var item = items[Math.floor(Math.random() * items.length)];
            var audio = new Audio(item);
        audio.play()    
        }else{
         document.getElementById('validate-message').style.color = 'red' ;
        document.getElementById('like-icon').classList = 'fas fa-thumbs-down' ;
        $("#validate-message").animate({left: '10px'});
        var audio = new Audio('../Audio/Please, try again.mp3');
        audio.play()    
        }
    })
})

// document.addEventListener("mousemove", () => {
//     let mousex = event.clientX; // Gets Mouse X
//     let mousey = event.clientY; // Gets Mouse Y
//     console.log([mousex, mousey]); // Prints data
//   });
  