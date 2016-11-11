(function(){
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer();
  var material;
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild( renderer.domElement );



  var loader = new THREE.TextureLoader();

  loader.load(
    '../assets/europa.jpg',

    function( texture ) {
      // Do something with the texture
      var geometry = new THREE.SphereGeometry(.1,64,64 );


      var material = new THREE.MeshPhongMaterial( {
        map: texture,
        // overdraw: 0.5,
      } );

      var sphere = new THREE.Mesh( geometry, material );
      sphere.position.x = 5;
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


  loader.load(
    '../assets/jupiter.jpg',
    function ( texture ){
      var geometry = new THREE.SphereGeometry(4, 64, 64);
      var material = new THREE.MeshPhongMaterial( {
        map: texture,
        // overdraw: 0.5,
      } );

      var sphere = new THREE.Mesh( geometry, material );
      // sphere.position.x = 4;
      scene.add( sphere );
    },
    function( xhr ) {
      console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    } ,
    function( xhr ) {
      console.log('Error Loading Texture');
    }


  )





  var mouseX = 0, mouseY = 0;
  var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;

  function onDocumentMouseMove( event ) {
				mouseX = ( event.clientX - windowHalfX );
				mouseY = ( event.clientY - windowHalfY );
	}

  // document.addEventListener( 'mousemove', onDocumentMouseMove, false );


  camera.position.z = 8;
  camera.position.x = 10;
  camera.position.y = 10;

  var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
  scene.add(light);

  var skyGeo = new THREE.SphereGeometry(100000, 25, 25);

  loader.load(
    '../assets/jupiter.jpg',
    function( texture ){
      var material = new THREE.MeshPhongMaterial({
        map: texture
      });
      var sky = new THREE.Mesh(skyGeo, material);
      sky.material.side = THREE.BackSide;
      scene.add(sky);
    },
    function( xhr ) {
      console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    } ,
    function( xhr ) {
      console.log('Error Loading Texture');
    }
  )

  var light = new THREE.AmbientLight( 0x404040 ); // soft white light
  scene.add( light );

  function render() {
    requestAnimationFrame( render );
    camera.position.x += ( mouseX - camera.position.x ) * 0.05;
		camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
		camera.lookAt( scene.position );
		scene.rotation.y -= 0.005;
    renderer.render( scene, camera );
  }
  render();
})();
