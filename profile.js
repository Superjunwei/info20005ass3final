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


  // Recently Viewed select wrap box

  var selectWrap = document.getElementById('selectWrap')
  var status2 = true
  selectWrap.addEventListener('click', function () { 
    if (status2) {
      status2 = false
      document.getElementById('selectContent').style.display = 'block'
    } else { 
      status2 = true
      document.getElementById('selectContent').style.display = 'none'
    }
  })

}