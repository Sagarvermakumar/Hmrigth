
const btn = document.querySelectorAll(".btn-style");
btn.forEach(btns => {
    btns.addEventListener('mouseover', (event) => {
        const x = (event.pageX - btns.offsetLeft);
        const y = (event.pageY - btns.offsetTop);
        btns.style.setProperty("--xPos", x + "px")
        btns.style.setProperty("--yPos", y + "px")

        console.log(`mouse hoverd:"  ${x},${y}`);
        console.log(x.typeof)
    });
})
