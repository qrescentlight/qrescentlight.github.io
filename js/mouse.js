handleMouseMove = (event) => {
    const y = event.pageY;
    const x = event.pageX;
    const ref = document.getElementById("mouse");
    const drop = document.getElementById("dropbox");
    const doub = document.getElementById("double");

    const scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;

    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    doub.style.left = drop.style.left = ref.style.left = x - scrollLeft + 'px';
    doub.style.top = drop.style.top = ref.style.top = y - scrollTop + 'px';

    // make it dynamic when scrolling
    const block = document.getElementById("artistBlock");

    block.style.marginLeft = 3 - x / 500 + "vw";
    block.style.marginTop = 5 - y / 100 + "vh";
};



function mouseShape() {
    let p = document.querySelectorAll("p");
    // let h1 = document.querySelectorAll("h1");
    let h1 = document.querySelectorAll(".spanText");
    let pic = document.querySelectorAll(".pic, img");
    let button = document.querySelectorAll("button, a, #work, li");
    // let mouseDiv;


    let mouse = document.getElementById("mouse");
    let mouseDrop = document.getElementById("dropbox");

    let olen = "2vw";
    let owid = "2vw";
    let obdr = "0%";
    let ombm = "exclusion";
    let oopa = "1";
    let obkc = "white";
    // let otrf = "translate(-50%, -50%)";
    let odsp = "block"
    let otxt = "";

    let nlen = olen;
    let nwid = owid;
    let nbdr = obdr;
    let nmbm = ombm;
    let nopa = oopa;
    let nbkc = obkc;
    // let ntrf = otrf;
    let ndsp = odsp;
    let ntxt = otxt;



    // document.getElementById("mouse").style.height = nlen;
    // document.getElementById("mouse").style.width = nwid;
    // document.getElementById("mouse").style.borderRadius = nbdr;

    selector(mouse, pic, "6vw", "6vw", obdr, "normal", "0.3", "whitesmoke", odsp, otxt, olen, owid, obdr, ombm, oopa, obkc, odsp, otxt);
    selector(mouse, p, "4vw", "10vw", obdr, ombm, oopa, obkc, odsp, otxt, olen, owid, obdr, ombm, oopa, obkc, odsp, otxt);
    selector(mouse, button, "0.5vw", "0.5vw", "100%", ombm, oopa, obkc, odsp, otxt, olen, owid, obdr, ombm, oopa, obkc, odsp, otxt);
    // selector(mouse, h1, "3vw", "3vw", "100%", ombm, oopa, obkc, odsp, otxt, olen, owid, obdr, ombm, oopa, obkc, odsp, otxt);
    // selector(mouseDrop, h1, "auto", "20vw", obdr, "normal", oopa, "black", odsp, otxt, "0vw", "0vw", obdr, "normal", oopa, "white", odsp, otxt);
    dropbox(mouseDrop, mouse, h1);

}

function dropbox(mouseT, mouseBol, sel) {
    // mouseDiv.innerText = element.firstChild.innerText;

    // var numSel = sel;

    sel.forEach((ele, index) => {
        ele.onmouseover = function () {
            mouseT.innerHTML = index + 1 + "<div>" + ele.firstChild.innerText + "</div>";
            mouseT.style.width = "25vw";
            mouseT.style.padding = "1vh 1vw"
            // mouseBol.style.borderRadius = "100%";
            // if (mouseT.getBoundingClientRect().right >= window.innerWidth * 0.75) {
            //     mouseT.style.width = "20vw";
            // } else {
            //     mouseT.style.width = "25vw";
            // }
        }
        ele.onmouseout = function () {
            mouseT.innerText = "";
            mouseT.style.width = "0";
            mouseT.style.padding = "0vw"
            // mouseBol.style.borderRadius = "0%";
        }
    })

}

function selector(mouseDiv, select, nlen, nwid, nbdr, nmbm, nopa, nbkc, ndsp, ntxt, olen, owid, obdr, ombm, oopa, obkc, odsp, otxt) {



    select.forEach(element => {
        // let ddd = "element.childNodes.innerText";
        element.onmouseover = function () {
            mouseDiv.style.height = nlen;
            mouseDiv.style.width = nwid;
            mouseDiv.style.borderRadius = nbdr;
            mouseDiv.style.mixBlendMode = nmbm;
            mouseDiv.style.opacity = nopa;
            mouseDiv.style.backgroundColor = nbkc;
            // mouseDiv.style.transform = ntrf;
            mouseDiv.style.display = ndsp;
            mouseDiv.innerText = otxt;
            // setTimeout(() => {

            // }, 1);



        }
        element.onmouseout = function () {
            mouseDiv.style.height = olen;
            mouseDiv.style.width = owid;
            mouseDiv.style.borderRadius = obdr;
            mouseDiv.style.mixBlendMode = ombm;
            mouseDiv.style.opacity = oopa;
            mouseDiv.style.backgroundColor = obkc;
            //  mouseDiv.style.transform = otrf; 
            mouseDiv.style.display = odsp;
            mouseDiv.innerText = otxt;

            // setTimeout(() => {


            // }, 300);


        }

        // h1.forEach(ele => {
        //     ele.onmouseover = function () {
        //         mouseDiv.innerText = ele.firstChild.innerText;
        //         mouseDiv.style.width = "20vw";
        //     }
        //     ele.onmouseout = function () {
        //         mouseDiv.innerText = "";
        //         mouseDiv.style.width = "0";
        //     }
        // })
    });
}

document.addEventListener("mousemove", handleMouseMove, false);
document.addEventListener("mousemove", mouseShape, false);