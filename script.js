let x = document.getElementById("main");
let s = "";
let arr = [`<img src="https://i.pinimg.com/736x/21/20/f3/2120f3adae8449127d74a2441037ef59.jpg">`,`<img src="https://i.pinimg.com/736x/20/ee/19/20ee19c1fd975202b0206ed1c7e5d294.jpg
">`,`<img src=https://i.pinimg.com/736x/b5/f4/81/b5f4814ba48b62b033d5e22a09bcbc58.jpg
"">`,`<img src="https://i.pinimg.com/1200x/ce/a8/3a/cea83a0501415c34588c88756bce5a2c.jpg
">`,`<img src="https://i.pinimg.com/1200x/d9/01/0a/d9010af81faf0ff0cad4144e88340d69.jpg
">`];
for(let i = 1; i<=60; i++){
    let r = Math.floor(Math.random()*5);
    s += `<div id="card">
            <h1>${arr[r]}</h1>
        </div>`;
}
x.innerHTML = s;