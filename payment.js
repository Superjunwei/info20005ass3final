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

  // Payment errror display function

  var payBtn = document.querySelector('#payBtn')
  payBtn.addEventListener('click', function () {
    var userName = document.getElementById('userName').value
    var cardNumber = document.getElementById('cardNumber').value
    var date = document.getElementById('date').value
    var cvv = document.getElementById('cvv').value

    document.getElementById('userName').className = ''
    document.getElementById('userErrorTips').style.display = 'none'

    document.getElementById('cardNumber').className = ''
    document.getElementById('cardErrorTips').style.display = 'none'

    document.getElementById('date').className = ''
    document.getElementById('dateErrorTips').style.display = 'none'

    document.getElementById('cvv').className = ''
    document.getElementById('cvvErrorTips').style.display = 'none'


    if (userName.length === 0 && cardNumber.length === 0 && date.length === 0 && cvv.length === 0) {
      document.getElementById('cvv').className = 'error'
      document.getElementById('cvvErrorTips').style.display = 'block'
      document.getElementById('date').className = 'error'
      document.getElementById('dateErrorTips').style.display = 'block'
      document.getElementById('cardNumber').className = 'error'
      document.getElementById('cardErrorTips').style.display = 'block'
      document.getElementById('userName').className = 'error'
      document.getElementById('userErrorTips').style.display = 'block'
    }


    if (userName.length !== 0) {
      if (cardNumber.length !== 0) {
        if (date.length !== 0) {
          if (cvv.length !== 0) {
            window.location.href = 'confirmation.html'
          } else {
            document.getElementById('cvv').className = 'error'
            document.getElementById('cvvErrorTips').style.display = 'block'
          }
        } else {
          document.getElementById('date').className = 'error'
          document.getElementById('dateErrorTips').style.display = 'block'
        }
      } else {
        document.getElementById('cardNumber').className = 'error'
        document.getElementById('cardErrorTips').style.display = 'block'
      }
    } else {
      document.getElementById('userName').className = 'error'
      document.getElementById('userErrorTips').style.display = 'block'

    }
  })

}