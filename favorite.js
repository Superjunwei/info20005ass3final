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

  // remove favorite *3

  var remove1 = document.getElementById('remove1')
  remove1.addEventListener('click', function () { 
    document.querySelector('#favoriteInfo1').style.display = 'none'
  })

  var remove2 = document.getElementById('remove2')
  remove2.addEventListener('click', function () { 
    document.querySelector('#favoriteInfo2').style.display = 'none'
  })

  var remove3 = document.getElementById('remove3')
  remove3.addEventListener('click', function () { 
    document.querySelector('#favoriteInfo3').style.display = 'none'
  })

}