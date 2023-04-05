function showMenu(){
  const menuBtn = document.getElementById("menu")
  const navMenu = document.querySelector("nav")

  menuBtn.addEventListener("click", function(){
      navMenu.classList.toggle("show")

  }
  )
}

showMenu()