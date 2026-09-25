function loop() {
    // var api = "http://localhost:3000/items/";
    var api = "https://my-json-server.typicode.com/qrescentlight/portfolio-test-db/items/";
    // var api = "./json/db.json";
    // var api = .../images/
    fetch(api)
        .then(x => x.json())
        .then(y => loopCont(y))
}

function loopCont(y) {
    for (let i = 0; i < y.length; i++) {
        // console.log(y[i]);
        var work = document.getElementById("work");
        var mouse = document.getElementById("dropbox");



        // var yid = y[i].id;

        var a = document.createElement("a");
        var li = document.createElement("li");

        li.setAttribute("class", "pic contentList");
        li.setAttribute("id", y[i].id);

        a.setAttribute("class", "pic");
        // a.setAttribute("href", "#"+y[i].id);
        a.setAttribute("href", "#project");
        a.innerHTML = y[i].name;
        a.addEventListener("click", function () {
            // alert(y[i].id)// 
            // var apiId = "http://localhost:3000/items/" + y[i].id;
            var apiId = "https://my-json-server.typicode.com/qrescentlight/portfolio-test-db/items/" + y[i].id;
            // var apiId = "./json/db.json" + y[i].id;
            fetch(apiId)
                .then(xx => xx.json())
                .then(yy => yyfunct(yy))




            function yyfunct(yy) {
                // console.log(yy);
                document.querySelector(".overlay").style.display = "grid";

                document.getElementById("nodeName").innerHTML = yy.name;

                document.getElementById("nodeDesc").innerHTML = yy.desc[0];
                document.getElementById("nodeProcess").innerHTML = yy.desc[1];
                document.getElementById("nodeMypart").innerHTML = yy.desc[2];
                document.getElementById("nodeReflect").innerHTML = yy.desc[3];

                var styles = `
                    #nodeThumb{
                        background: url(gifs/`+ yy.images[0] + `);
                        background-repeat: no-repeat;
                        background-size: cover;
                        // background-position: 0vw -50vh;
                        background-position: center;
                        width: 60vw;
                        height: 30vw; 
                    }
                `

                var styleSheet = document.createElement("style");
                styleSheet.innerText = styles;
                document.head.appendChild(styleSheet);

                var nodeLink = document.getElementsByClassName("nodeLink");
                for (let idx = 0; idx < nodeLink.length; idx++) {
                    nodeLink[idx].setAttribute("href", yy.link);
                }

                var nodeImages = document.getElementById("nodeImages");

                nodeImages.innerHTML = "";
                for (let index = 1; index < yy.images.length; index++) {
                    var img = document.createElement("img");
                    img.src = "images/" + yy.images[index];


                    nodeImages.appendChild(img);
                }

                document.querySelector(".overlay").style.marginLeft = "0vw";



            }
            document.querySelector("body").style.overflowY = "hidden";
            document.getElementById("project").scrollTo(0, 0);

        }, y, y[i].id)



        li.appendChild(a);
        work.appendChild(li);

        li.addEventListener("mouseenter", function () {
            // console.log(y[i].desc[0]);
            mouse.innerHTML = i + 1 + "<div>" + y[i].desc[0] + "</div>";
            mouse.style.width = "25vw";
            mouse.style.padding = "1vh 1vw"
            // mouse.style.backgroundColor = "wheat"
            // mouse.style.color = "#0A214C"
        }, y);

        li.addEventListener("mouseleave", function () {
            // console.log(y[i].desc[0]);
            mouse.innerText = "";
            mouse.style.width = "0vw";
            mouse.style.padding = "0vw"
            // mouse.style.backgroundColor = "#0A0A0A"
            // mouse.style.color = "whitesmoke"
        }, y);

        // mouseT.innerText = y.desc[0];
        // mouseT.style.width = "20vw";
        // mouseBol.style.borderRadius = "100%";)

        // y[i].onmouseover = function () {
        //     console.log(y[i].desc[0]);
        //     // mouseT.innerText = y.desc[0];
        //     // mouseT.style.width = "20vw";
        //     // mouseBol.style.borderRadius = "100%";
        // }
        // y[i].onmouseout = function () {
        //     console.log(y[i].desc[0]);
        //     // mouseT.innerText = "";
        //     // mouseT.style.width = "0";
        //     // mouseBol.style.borderRadius = "0%";
        // }

        // console.log(y[i].desc[0]);

        // descDrop(y);

        // function descDrop(y) {
        //     // mouseDiv.innerText = element.firstChild.innerText;

        //     y[i].onmouseover = function () {
        //         mouseT.innerText = y.desc[0];
        //         // mouseT.style.width = "20vw";
        //         // mouseBol.style.borderRadius = "100%";
        //     }
        //     y[i].onmouseout = function () {
        //         mouseT.innerText = "";
        //         // mouseT.style.width = "0";
        //         // mouseBol.style.borderRadius = "0%";
        //     }


        // }

        var styles = `
            #` + y[i].id + `{
                background: url(gifs/`+ y[i].images[0] + `);
                                -webkit-text-fill-color: transparent;
                                background-repeat: no-repeat;
                                background-size: cover;
                                background-position: center;
                                -webkit-background-clip: text;
                                background-clip: text;
            }

            #` + y[i].id + `:hover  {
                background: transparent;
                                background: url(gifs/`+ y[i].images[0] + `);
                                background-color: aliceblue;
                                -webkit-text-fill-color: #0A214C;
                                background-position: center;
                                background-repeat: no-repeat;
                                background-size: cover;
                                background-clip: none;
            }
        `

        var styleSheet = document.createElement("style");
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
    }
}

loop();