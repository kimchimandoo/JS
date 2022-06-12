let Links = {
    setColor : function(color) {
        // let links = document.querySelectorAll('a');
        // let num = 0;
        // while(num < links.length){
        // console.log(links[num]);
        //     links[num].style.color = color;
        // num = num + 1;
        // }
        $('a').css('color', color);
    }
}

let Body = {
    setColor : function(color) {
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor : function(color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}

function nightDayHandler(handler){
    let target =  document.querySelector('body');
    if(handler.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        handler.value = 'day';

        Links.setColor('lightblue');

    } else {       
        Body.setBackgroundColor('white');
        Body.setColor('black');
        handler.value = 'night';

        Links.setColor('blue');
    }
}