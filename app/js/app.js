(function(){

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer({
    antialiasing: true
  });
  var loader = new THREE.TextureLoader();
  var mouseX = 0, mouseY = 0;
  var windowHalfX = window.innerWidth / 2;
  var windowHalfY = window.innerHeight / 2;
  var material;
  var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
  var skyGeo = new THREE.SphereGeometry(100000, 25, 25);
  var ambientLight = new THREE.AmbientLight( 0x404040 );

  camera.position.z = 8;
  camera.position.x = 10;
  camera.position.y = 10;

  container = document.getElementById('container');

  renderer.setSize(window.innerWidth, window.innerHeight);

  container.appendChild( renderer.domElement );

  loader.load(
    '../assets/europa.jpg',

    function( texture ) {
      // Do something with the texture
      var geometry = new THREE.SphereGeometry(4,120,120 );


      var material = new THREE.MeshPhongMaterial( {
        map: texture,
        // overdraw: 0.5,
      } );

      var sphere = new THREE.Mesh( geometry, material );
      // sphere.position.x = 3000;
      // sphere.position.y = 5;

      scene.add( sphere );

    },

    function( xhr ) {
      console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    } ,
    function( xhr ) {
      console.log('Error Loading Texture');
    }
  );

  scene.add(light);
  scene.add( ambientLight );
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
  render();
})();
