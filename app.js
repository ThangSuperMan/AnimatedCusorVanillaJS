// Query selectors
const innerCursor = document.querySelector(".inner-cursor")
const outerCursor = document.querySelector(".outer-cursor")
const links = document.querySelectorAll("ul li a");

console.log("hello")
// Functions
function moveCursor(event) {
    let x = event.clientX;
    let y = event.clientY;

    innerCursor.style.left = `${x}px`
    innerCursor.style.top = `${y}px`
    outerCursor.style.left = `${x}px`
    outerCursor.style.top = `${y}px`

}

// Event listeners
document.addEventListener("mousemove", moveCursor)

links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        innerCursor.classList.add("grow")
        console.log("mouse enter")
    })

    link.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow")
        console.log("mouse leave")
    })
})

