$(document).ready(function() {
    var playing1 = false;
    var playing2 = false;
    var playing3 = false;
    var playing4 = false;
    var playing5 = false;
    var playing6 = false;
    var playing7 = false;
    var playing8 = false;
    var stream = new Audio('stream.mp3');
    var fireplace = new Audio('fireplace.mp3');
    var crickets = new Audio('crickets.mp3');
    var rain = new Audio('rain.mp3');
    var birds = new Audio('birds.mp3');
    var noise = new Audio('noise.mp3');
    var lava = new Audio('lava.mp3');
    var ocean = new Audio('ocean.mp3');
    lava.load();
    ocean.load();
    stream.volume = 0.5;
    fireplace.volume = 0.5;
    crickets.volume = 0.5;
    rain.volume = 0.5;
    birds.volume = 0.5;
    noise.volume = 0.5;
    lava.volume = 0.5;
    ocean.volume = 0.5;
    stream.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    fireplace.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    crickets.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    rain.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    birds.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    noise.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    lava.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    ocean.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    $('#stream').click(function() {
        $(this).toggleClass('started');
        if(playing1){
            stream.pause();
            playing1 = false;
        } else{
            stream.play();
            playing1 = true;
        }
    });
    $('#streamUp').click(function() {
        stream.volume += 0.1;
    });
    $('#streamDown').click(function() {
        stream.volume -= 0.1;
    });
    $('#fireplace').click(function() {
        $(this).toggleClass('started');
        if(playing2){
            fireplace.pause();
            playing2 = false;
        } else{
            fireplace.play();
            playing2 = true;
        }
    });
    $('#fireplaceUp').click(function() {
        fireplace.volume += 0.1;
    });
    $('#fireplaceDown').click(function() {
        fireplace.volume -= 0.1;
    });
    $('#crickets').click(function() {
        $(this).toggleClass('started');
        if(playing3){
            crickets.pause();
            playing3 = false;
        } else{
            crickets.play();
            playing3 = true;
        }
    });
    $('#cricketsUp').click(function() {
        crickets.volume += 0.1;
    });
    $('#cricketsDown').click(function() {
        crickets.volume -= 0.1;
    });
    $('#rain').click(function() {
        $(this).toggleClass('started');
        if(playing4){
            rain.pause();
            playing4 = false;
        } else{
            rain.play();
            playing4 = true;
        }
    });
    $('#rainUp').click(function() {
        rain.volume += 0.1;
    });
    $('#rainDown').click(function() {
        rain.volume -= 0.1;
    });
    $('#birds').click(function() {
        $(this).toggleClass('started');
        if(playing5){
            birds.pause();
            playing5 = false;
        } else{
            birds.play();
            playing5 = true;
        }
    });
    $('#birdsUp').click(function() {
        birds.volume += 0.1;
    });
    $('#birdsDown').click(function() {
        birds.volume -= 0.1;
    });
    $('#noise').click(function() {
        $(this).toggleClass('started');
        if(playing6){
            noise.pause();
            playing6 = false;
        } else{
            noise.play();
            playing6 = true;
        }
    });
    $('#noiseUp').click(function() {
        noise.volume += 0.1;
    });
    $('#noiseDown').click(function() {
        noise.volume -= 0.1;
    });
    $('#lava').click(function() {
        $(this).toggleClass('started');
        if(playing7){
            lava.pause();
            playing7 = false;
        } else{
            lava.play();
            playing7 = true;
        }
    });
    $('#lavaUp').click(function() {
        lava.volume += 0.1;
    });
    $('#lavaDown').click(function() {
        lava.volume -= 0.1;
    });
    $('#ocean').click(function() {
        $(this).toggleClass('started');
        if(playing8){
            ocean.pause();
            playing8 = false;
        } else{
            ocean.play();
            playing8 = true;
        }
    });
    $('#oceanUp').click(function() {
        ocean.volume += 0.1;
    });
    $('#oceanDown').click(function() {
        ocean.volume -= 0.1;
    });

});