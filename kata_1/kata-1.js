// Kata #1
// Dentro del objeto "this" no pertenece a obj
// actualiza la función para que salte el alert correspondiente

var obj = {
  onClick: function(e) {
    this.renderElement()
  },

  renderElement: function() {
    alert('Renderizado')
  }
}

document.getElementsByTagName('button')[0].addEventListener('click', obj.renderElement)
