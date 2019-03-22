var board = function(canvas) {
  var gobanXBorder = 11
  var gobanYBorder = 12
  var gobanColumnInterstitial = 22
  var gobanRowInterstitial = 24
  var getCanvasWidth = function(size) {
    return (size - 1) * gobanColumnInterstitial + gobanXBorder * 2
  }
  var getCanvasHeight = function(size) {
    return (size - 1) * gobanRowInterstitial + gobanYBorder * 2
  }
  
  var ctx = canvas.getContext("2d")
  
  return {
    goban: function(size) {
      canvas.width = getCanvasWidth(size);
      canvas.height = getCanvasHeight(size);
      ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
      for (var i = 0, x = gobanXBorder, y = gobanYBorder; i < size; i++) {
        ctx.fillRect(gobanXBorder, y, (size - 1) * gobanColumnInterstitial, 1);
        ctx.fillRect(x, gobanYBorder, 1, (size - 1) * gobanRowInterstitial);
        x += gobanColumnInterstitial
        y += gobanRowInterstitial
      }
      return this
    },
    hoshi: function() {
      // draw hoshis
      return this
    },
    placeStone: function(added) {
      // update drawn stones
      return this
    },
    removeStones: function(captured) {
      return this
    }
  }
}

//lazy execution: js compose functions? - so canvas is updated only at execution and the functions are pure
