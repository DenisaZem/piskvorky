const HandleClick =(event)=>{
    event.target.classList.add("board__field--circle")
}

const SelectSquare = document.querySelectorAll(".square")
SelectSquare.forEach((item)=>{
    item.addEventListener("click", HandleClick)
})


