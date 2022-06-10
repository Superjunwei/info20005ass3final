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

  // add and remove favorite *6

  var addLike1 = document.getElementById('addLike1')
  var removerLike1 = document.getElementById('removeLike1')
  addLike1.addEventListener('click', function () { 
    document.getElementById('addLike1').style.display = 'none'
    document.getElementById('removeLike1').style.display = 'block'
  })
  removerLike1.addEventListener('click', function () { 
    document.getElementById('addLike1').style.display = 'block'
    document.getElementById('removeLike1').style.display = 'none'
  })


  var addLike2 = document.getElementById('addLike2')
  var removerLike2 = document.getElementById('removeLike2')
  addLike2.addEventListener('click', function () { 
    document.getElementById('addLike2').style.display = 'none'
    document.getElementById('removeLike2').style.display = 'block'
  })
  removerLike2.addEventListener('click', function () { 
    document.getElementById('addLike2').style.display = 'block'
    document.getElementById('removeLike2').style.display = 'none'
  })


  var addLike3 = document.getElementById('addLike3')
  var removerLike3 = document.getElementById('removeLike3')
  addLike3.addEventListener('click', function () { 
    document.getElementById('addLike3').style.display = 'none'
    document.getElementById('removeLike3').style.display = 'block'
  })
  removerLike3.addEventListener('click', function () { 
    document.getElementById('addLike3').style.display = 'block'
    document.getElementById('removeLike3').style.display = 'none'
  })


  var addLike4 = document.getElementById('addLike4')
  var removerLike4 = document.getElementById('removeLike4')
  addLike4.addEventListener('click', function () { 
    document.getElementById('addLike4').style.display = 'none'
    document.getElementById('removeLike4').style.display = 'block'
  })
  removerLike4.addEventListener('click', function () { 
    document.getElementById('addLike4').style.display = 'block'
    document.getElementById('removeLike4').style.display = 'none'
  })


  var addLike5 = document.getElementById('addLike5')
  var removerLike5 = document.getElementById('removeLike5')
  addLike5.addEventListener('click', function () { 
    document.getElementById('addLike5').style.display = 'none'
    document.getElementById('removeLike5').style.display = 'block'
  })
  removerLike5.addEventListener('click', function () { 
    document.getElementById('addLike5').style.display = 'block'
    document.getElementById('removeLike5').style.display = 'none'
  })


  var addLike6 = document.getElementById('addLike6')
  var removerLike6 = document.getElementById('removeLike6')
  addLike6.addEventListener('click', function () { 
    document.getElementById('addLike6').style.display = 'none'
    document.getElementById('removeLike6').style.display = 'block'
  })
  removerLike6.addEventListener('click', function () { 
    document.getElementById('addLike6').style.display = 'block'
    document.getElementById('removeLike6').style.display = 'none'
  })

}