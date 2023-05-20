document.addEventListener('mousemove', function(e) {
    let cursor = document.querySelector('.cursor')
    cursor.style.left = e.pageX + 'px'
    cursor.style.top = e.pageY + 'px'
  })