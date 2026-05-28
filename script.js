let x = document.getElementById("main");
let s = "";
for(let i = 1; i<=52; i++){
    s += `<div id="card">
            <img src="https://i.pinimg.com/736x/21/20/f3/2120f3adae8449127d74a2441037ef59.jpg" alt="">
        </div>`;
}
x.innerHTML = s;