(function(){
  console.log('Interface Loaded.');
  //Animate stats loading in
  $('#interface-content').show();

  // Load Europa stats
  $('#interface-content').load('views/europa-stats.html');

  $('#europa-button').on('click', function(){
    $('#interface-content').load('views/europa-stats.html');

  });
  $('#titan-button').on('click', function(){
    $('#interface-content').load('views/titan-stats.html');

  });
  $('#jupiter-button').on('click', function(){
    $('#interface-content').load('views/jupiter-stats.html');

  });

  // set hover functionality
  $('.list-element').on('mouseenter', function(){

  });

})();
