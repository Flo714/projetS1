function carrousel9Images() {
    var images = document.querySelectorAll('.img_carrousel');
    let d = 2000;
    let delta = 1000;

    images.forEach(function(img,indice) {
        img.style.zIndex = images.length - indice;
    });
    let anim155 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim155.add({
        targets: images,
        translateX: [{value: '199', duration: d},
                     {value: '-199', duration: 0, delay: function(img,ind) {
                         if (ind == 0) return (8*delta)+(7*d);
                         if (ind == 1) return (7*delta)+(6*d);
                         if (ind == 2) return (6*delta)+(5*d);
                         if (ind == 3) return (5*delta)+(4*d);
                         if (ind == 4) return (4*delta)+(3*d);
                         if (ind == 5) return (3*delta)+(2*d);
                         if (ind == 6) return (2*delta)+d;
                         if (ind == 7) return delta;
                    return 0;
                }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 8) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            if (ind == 2) return (3*delta)+(2*d);
            if (ind == 3) return (4*delta)+(3*d);
            if (ind == 4) return (5*delta)+(4*d);
            if (ind == 5) return (6*delta)+(5*d);
            if (ind == 6) return (7*delta)+(6*d);
            if (ind == 7) return (8*delta)+(7*d);
            return (9*delta)+(8*d);
        }
    });
}

function monterLegende() {
    document.querySelector('.CP_legende_roman_cp').style.display = 'block';
    return anime({
        targets: '.CP_legende_roman_cp',
        translateY: '-5em',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play();
}

function descendreLegende() {
	document.querySelector('.CP_legende_roman_cp').style.display = 'block';
    return anime({
        targets: '.CP_legende_roman_cp',
        translateY: '5em',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play();
}
