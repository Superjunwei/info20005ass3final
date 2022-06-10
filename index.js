window.onload = function () { 

    // mobile click side menu
    
    var menuBtn = document.getElementById('menuBtn')
    var status = true
    menuBtn.addEventListener('click', function () { 
      if (status) {
        status = false
        document.getElementById('sliderMenu').style.display = 'block'
      } else { 
        status = true
        document.getElementById('sliderMenu').style.display = 'none'
      }
    })
  
}