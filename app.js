var makeDot = function(top, left, timeBetweenSteps) {
  var vert;
  if (Math.random() < 0.5) {
    vert = -1*Math.random()*10
  } else {
    vert = Math.random()*10
  }
  var side;
  if (Math.random() < 0.5) {
    side = -1*Math.random()*10
  } else {
    side = Math.random()*10
  }
  var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  
  this.$node = $('<span class="dot"></span>');
  this.top = top;
  this.left = left;
  this.color = randomColor;
  this.count = 0;
  this.number = Math.random();
  this.vertDirection = vert;
  this.sideDirection = side;
  this._timeBetweenSteps = timeBetweenSteps;
  this.step(this);
  this.setPosition(top, left);
};

makeDot.prototype.step = function() {
  setTimeout(this.step.bind(this), this._timeBetweenSteps);
  this.count++;
  if (this.top < 0) {
    this.vertDirection *= -1;
  } else if (this.top > $('body').height()) {
    this.vertDirection *= -1;
  } else if (this.left < 0) {
    this.sideDirection *= -1;
  } else if (this.left > $('body').width()) {
    this.sideDirection *= -1;
  }
  var styleSettings = {
    top: this.top += this.vertDirection*this.number*3,
    left: this.left += this.sideDirection*this.number*3,
  };
  this.$node.css(styleSettings);
};

makeDot.prototype.setPosition = function() {
    var styleSettings = {
      'top': this.top,
      'left': this.left,
      'border': '5px solid'+this.color,
      'border-radius': '5px',
      'position': 'absolute',
      'z-index': -1,
    };
    this.$node.css(styleSettings);
};


$(document).ready(function(){

  setTimeout(function(){
    for (var i = 0; i < 200; i++) {
      var Dot = new makeDot(
        $("body").height() / 2 ,
        $("body").width() / 2,
        50
      );
      $('body').append(Dot.$node);    
    }
  }, 500);

  setTimeout(function(){
    $('.search').fadeIn('slow');
  }, 1500)


  function startTime() {
      var today = new Date();
      var hour = today.getHours();
      var min = today.getMinutes();
      if (hour > 12) hour -= 12;
      if (min < 10) min = '0' + min; 
      $('h1').text(hour + ":" + min);
      setTimeout(startTime, 500);
  }

  setTimeout(function(){
    $('h1').text(startTime).fadeIn('slow');
  }, 1500)

});









