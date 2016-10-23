$(document).ready(function() {
  $('#submit').click(function() {
    if(isValidNumber(parseInt($('#gridSize').val()))) {
      resetGrid()
      createGrid($('#gridSize').val())
      $('td').mouseenter(changeColor)
    } else {
      alert('Not a valid number, please try again.')
    }
  })

  $('#reset').click(function() {
    resetGrid()
  })
})

function isValidNumber(n) {
  if (960 % n !== 0) {
    return false
  }
  return true
}

function createGrid(size) {
  var gridSquareSize = 960 / size;
  for(var i = 0; i < size; i++) {
    $('#grid-container').append('<tr>')
    for(var j = 0; j < size; j++) {
      $('#grid-container').append('<td class="grid" style="height:' + gridSquareSize + 'px;"></td>')
    }
    $('#grid-container').append('</tr>')
  }

}

function changeColor() {
  var opacity = parseFloat($(this).css('opacity'))
  var randomColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1,6)
  $(this).css({'opacity': opacity + 0.1})
  $(this).css({'background-color': randomColor})
}

function resetGrid() {
  $('#grid-container').empty()
}
