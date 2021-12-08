const checkValidityMatch = (message  , ref , matchTo) =>{
    if (message === true) {
        let myLine = new LeaderLine(
                ref,
                matchTo,
                {hide: true,
                color: 'green'},
                );
                myLine.show( 'draw', {duration:500,timing:[0.58, 0, 0.42, 1]});
        // const items =  [
        //     'https://books.knowledgewave.org/math-1/public/audio/Excellent.mp3' ,
        //     'https://books.knowledgewave.org/math-1/public/audio/Good job.mp3',
        //     'https://books.knowledgewave.org/math-1/public/audio/Super genius.mp3',
        //     ];
        //     let randomNumb = Math.floor(Math.random() * 3);
        //     var item = items[randomNumb];
        //     var audio = new Audio(item);
        //     audio.play()  
    }else if(message === false){
        let myLine = new LeaderLine(
                ref,
                matchTo,
                {hide: true,
                color: 'red'},
                );
                myLine.show( 'draw', {duration:500,timing:[0.58, 0, 0.42, 1]});
                setTimeout(()=>{
                    myLine.hide()
                },1000)
        // var audio = new Audio('https://books.knowledgewave.org/math-1/public/audio/Please, try again.mp3');
        // audio.play()   
        }
    }