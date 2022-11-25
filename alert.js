function msg(msg,duration) {
    var el = document.createElement("div");

    el.setAttribute("style","position: absolute; background-color: black; text-align: center; height: 80px; width: 300px; line-height: 80px; color: white; border: 3px solid green; top: 50%; left: 50%; transform: translate(-50%, -50%);");
    el.innerHTML = 'NEW FORM HAVE BEEN ADDED';

    setTimeout(function() {
    el.parentNode.removeChild(el);
    },800);

    document.body.appendChild(el);
}