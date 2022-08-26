document.addEventListener('DOMContentLoaded', function(event) { 

  form_activate_label_on_input_focus()

  function form_activate_label_on_input_focus() {
    document.querySelectorAll('form input').forEach(e => { setEventListener(e) })
    document.querySelectorAll('form textarea').forEach(e => { setEventListener(e) })
    
    setTimeout(function () {
      document.querySelectorAll(':-webkit-autofill').forEach(e => { e.parentElement.classList.add('active') })        
      document.querySelectorAll('form input:not(.flatpickr-input)').forEach(e => { if (e.value != '') { e.parentElement.classList.add('active') } })
      document.querySelectorAll('form input.flatpickr-input').forEach(e => { if (e.value != '') { e.parentElement.parentElement.classList.add('active') } })
      document.querySelectorAll('form textarea').forEach(e => { if (e.value != '') { e.parentElement.classList.add('active') } })
    }, 100)
  }

  function setEventListener(e) {
      e.addEventListener('change', toggleClassActive)
      e.addEventListener('focusin', toggleClassActive)
      e.addEventListener('focusout', toggleClassActive)
  }

  function toggleClassActive() {
    if (this.value.length == 0) {
      if (this === document.activeElement) {
        this.closest('.widget').classList.add('active')
      } else {
        this.closest('.widget').classList.remove('active')
      }
    } else {
      this.closest('.widget').classList.add('active')
    }
  }
  
})