const HandleClick =(event)=>{
    let player = "circle"
    event.target.classList.add(`board__field--${player}`)
}

const SelectSquare = document.querySelectorAll(".square")
SelectSquare.forEach((item)=>{
    item.addEventListener("click", HandleClick)
})


