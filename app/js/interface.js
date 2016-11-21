(function(){
  console.log('Interface Loaded.');
  //Animate stats loading in
  $('#interface-content').show();

  // Load Europa stats
  $('#interface-content').load('views/europa-stats.html?v=1.01');

  $('#europa-button').on('click', function(){
    $('#interface-content').load('views/europa-stats.html?v=1.01');

  });
  $('#titan-button').on('click', function(){
    $('#interface-content').load('views/titan-stats.html?v=1.01');

  });
  $('#jupiter-button').on('click', function(){
    $('#interface-content').load('views/jupiter-stats.html?v=1.01');

  });

  $('#moon-button').on('click', function(){
    $('#interface-content').load('views/moon-stats.html?v=1.01');

  });

  // set hover functionality
  $('.list-element').on('mouseenter', function(){

  });

})();
