// // function orientationHandler(event) {
// // document.getElementById("alpha").innerHTML = event.alpha;
// // document.getElementById("beta").innerHTML = event.beta;
// // document.getElementById("gamma").innerHTML = event.gamma;
// // document.getElementById("heading").innerHTML = event.webkitCompassHeading;
// // document.getElementById("accuracy").innerHTML = event.webkitCompassAccuracy;

// // }


// function motionHandler(event) {
//     // document.getElementById("interval").innerHTML = event.interval;
//     // var acc = event.acceleration;
//     // document.getElementById("x").innerHTML = acc.x;
//     // document.getElementById("y").innerHTML = acc.y;
//     // document.getElementById("z").innerHTML = acc.z;

//     // var accGravity = event.accelerationIncludingGravity;
//     // document.getElementById("xg").innerHTML = accGravity.x;
//     // document.getElementById("yg").innerHTML = accGravity.y;
//     // document.getElementById("zg").innerHTML = accGravity.z;

//     var rotationRate = event.rotationRate;
//     document.getElementById("Ralpha").innerHTML = rotationRate.alpha;
//     document.getElementById("Rbeta").innerHTML = rotationRate.beta;
//     document.getElementById("Rgamma").innerHTML = rotationRate.gamma;
// }

// if (window.DeviceMotionEvent) {
//     window.addEventListener("devicemotion", motionHandler, false);
// } else {
//     document.body.innerHTML = "What user agent u r using???";
// }

// if (window.DeviceOrientationEvent) {
//     // window.addEventListener("deviceorientation", orientationHandler, false);
// } else {
//     // document.body.innerHTML = "What user agent u r using???";
// };


$(function() {
    function motionHandler(event) {
        var rotationRate = event.rotationRate;
        // document.getElementById("Ralpha").innerHTML = rotationRate.alpha;
        // document.getElementById("Rbeta").innerHTML = rotationRate.beta;
        // document.getElementById("Rgamma").innerHTML = rotationRate.gamma;
    }
    if (window.DeviceMotionEvent) {
        window.addEventListener("devicemotion", motionHandler, false);
    } else {
        document.body.innerHTML = "What user agent u r using???";
    }

    function motionHandler(event) {
        var rotationRate = event.rotationRate;
        document.getElementById("Ralpha").innerHTML = rotationRate.alpha;
        document.getElementById("Rbeta").innerHTML = rotationRate.beta;
        document.getElementById("Rgamma").innerHTML = rotationRate.gamma;
        rotation(rotationRate.alpha,rotationRate.beta);
    }
    // console.log($('.transform'))

    function rotation(rota,beta) {
        $('#zg').html(beta);
        if (( rota < 30 && rota >10 || rota > -30 && rota < -10)||
            ( beta < 30 && beta >10 || beta > -30 && beta < -10) ){
            // console.log($('#zg').html(rota));
            // console.log($('#yg').html(beta));
       
            $('.transform').css('transform', 'translate3d(' + rota + 'px, '+ beta + 'px,0)');
        }
    }
    $('li.item-a').closest('#il')
  .css('background-color', 'red');
})
