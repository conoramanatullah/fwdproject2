(function(){

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer({
    antialiasing: true,
  });
  var maxAnisotropy = renderer.getMaxAnisotropy();
  var loader = new THREE.TextureLoader();
  var mouseX = 0, mouseY = 0;
  var windowHalfX = window.innerWidth / 2;
  var windowHalfY = window.innerHeight / 2;
  var material;
  var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
  var skyGeo = new THREE.SphereGeometry(100000, 25, 25);
  var ambientLight = new THREE.AmbientLight( 0x404040 );

  scene.add(light);
  light.position.z = 350;
  light.position.y = 100;


  camera.position.z = 8;
  camera.position.x = 10;
  camera.position.y = 10;
  renderer.setSize(window.innerWidth, window.innerHeight);


  container = document.getElementById('container');
  container.appendChild( renderer.domElement );

  function loadEuropa(){
    console.log('loading Europa');
    var texture = loader.load(
      '../assets/europa.jpg',
      function( texture ) {

        var geometry = new THREE.SphereGeometry(4,120,120 );
        var material = new THREE.MeshLambertMaterial( {
          map: texture,
        } );
        var sphere = new THREE.Mesh( geometry, material );
        sphere.name = 'europa';
        scene.add( sphere );
      },
      function( xhr ) {
        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
      } ,
      function( xhr ) {
        console.log('Error Loading Texture');
      }
    );

    texture.anisotropy = maxAnisotropy;
  };
  function loadTitan(){
    console.log('loading Titan');
    loader.load(
      '../assets/titan.jpg',
      function( texture ) {
        //remove any other scene geometry
        texture.anisotropy = maxAnisotropy;
        var geometry = new THREE.SphereGeometry(4,120,120 );
        var material = new THREE.MeshPhongMaterial( {
          map: texture,
        } );
        var sphere = new THREE.Mesh( geometry, material );
        sphere.name = 'titan';
        scene.add( sphere );
      },
      function( xhr ) {
        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
      } ,
      function( xhr ) {
        console.log('Error Loading Texture');
      }
    );


  };
  function loadJupiter(){
    console.log('loading Jupiter');
    loader.load(
      '../assets/jupiter.jpg',
      function( texture ) {

        var geometry = new THREE.SphereGeometry(4,120,120 );
        var material = new THREE.MeshPhongMaterial( {
          map: texture,
        } );
        var sphere = new THREE.Mesh( geometry, material );
        sphere.name = 'jupiter';
        scene.add( sphere );
      },
      function( xhr ) {
        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
      } ,
      function( xhr ) {
        console.log('Error Loading Texture');
      }
    );
  };

  function removeEntity(object) {
    var selectedObject = scene.getObjectByName(object.name);
    scene.remove( selectedObject );
    // animate();
  };
  scene.add(light);
  scene.add( ambientLight );

  $('#europa-button').on('click', function(){
    scene.remove(scene.getObjectByName('titan'));
    scene.remove(scene.getObjectByName('jupiter'));

    loadEuropa();

  });

  $('#titan-button').on('click', function(){
    console.log('Loading Titan');
    scene.remove(scene.getObjectByName('europa'));
    scene.remove(scene.getObjectByName('jupiter'));

    loadTitan();

  });

  $('#jupiter-button').on('click', function(){
    scene.remove(scene.getObjectByName('titan'));
    scene.remove(scene.getObjectByName('europa'));

    loadJupiter();

  });


  container.addEventListener('click', function(){
    if(camera.position.z == 1){
      camera.position.z = 8;
    } else {
      camera.position.z = 1;
    }
  });

  function render() {
    requestAnimationFrame( render );
    camera.position.x += ( mouseX - camera.position.x ) * 0.05;
		camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
		camera.lookAt( scene.position );
		// scene.rotation.y -= 0.005;
    scene.rotation.y += 0.005;
    scene.position.x = 5;

    // scene.position.z -= 0.0005
    renderer.render( scene, camera );
  }
  loadEuropa();
  render();
})();
