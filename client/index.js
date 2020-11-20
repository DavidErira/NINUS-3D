/*
------------------------------------------------------------------------------------------------------------------
*   Esta función toma la etiqueta a-scene y agrega el atributo networked-scene que contiene el id de la sala     *
*   el cual se genera aleatoriamente en esta misma función. [by David Erira - NINUS - 18/11/2020]                *
------------------------------------------------------------------------------------------------------------------
*/
function GeneraIDSala()
        {
            var sceneEl = document.querySelector('a-scene');
            var idSala = Math.floor( Math.random()*(1000 * 99999));
           
            console.log("conectado a sala: "+ idSala);
            document.getElementById("InterSalaID").innerHTML = '<h3 class="sala-actual"> El id de la sala es: '+idSala+ '</h3>';
            sceneEl.setAttribute('networked-scene', "app: myApp; room: "+idSala+"; debug: true; adapter: webrtc; audio:true ");
            
            document.getElementById('waitOnMe').emit('loaded'); 
            console.log( "Inicia todo" );
        }


/*
------------------------------------------------------------------------------------------------------------------
*   Esta función toma la etiqueta a-scene y agrega el atributo networked-scene con el ID de la sala                  *
*   que se ah ingresado en el input, en caso de estar vacio genera un alert. [by David Erira - NINUS - 18/11/2020]   *
------------------------------------------------------------------------------------------------------------------
*/
function IngresaIdSalaExistente()
        {
            var sceneEl = document.querySelector('a-scene');
            var SalaExistente = document.getElementById("Idsalaexistente");

            if (SalaExistente.value == "" ){
                console.log("ID invalido");
                alert("Ingresa un ID valido !!");
            }
            else {
                console.log("conectado a sala: "+ SalaExistente.value);
                document.getElementById("InterSalaID").innerHTML = '<h3 class="sala-actual"> El id de la sala es: '+SalaExistente.value+ '</h3>';
                sceneEl.setAttribute('networked-scene', "app: myApp; room: "+SalaExistente.value+"; debug: true; adapter: webrtc; audio:true ");
                document.getElementById('waitOnMe').emit('loaded'); 
                console.log( "va a iniciar" );
            }
            
           
        }


/*
----------------------------------------------------------------------------------------------------------
*  Se registra un componente para generar una posición nueva para cada participante nuevo, la posición   *
*  se genera de forma aleatoria. [by David Erira - NINUS - 18/11/2020]                                   *
----------------------------------------------------------------------------------------------------------
*/
AFRAME.registerComponent('spawn-in-circle', {
    schema: {
        radius: {type: 'number', default: 1}
    },
    
    init: function() {
        var el = this.el;
        var center = el.getAttribute('position');
    
        var angleRad = this.getRandomAngleInRadians();
        var circlePoint = this.randomPointOnCircle(this.data.radius, angleRad);
        var worldPoint = {x: circlePoint.x + center.x, y: center.y, z: circlePoint.y + center.z};
        el.setAttribute('position', worldPoint);
        // console.log('world point', worldPoint);
    
        var angleDeg = angleRad * 180 / Math.PI;
        var angleToCenter = -1 * angleDeg + 90;
        var angleRad = THREE.Math.degToRad(angleToCenter);
        el.object3D.rotation.set(0, angleRad, 0);
        // console.log('angle deg', angleDeg);
    },
    
    getRandomAngleInRadians: function() {
        return Math.random()*Math.PI*2;
    },
    
    randomPointOnCircle: function (radius, angleRad) {
        var x = Math.cos(angleRad)*radius;
        var y = Math.sin(angleRad)*radius;
        return {x: x, y: y};
    }
    });


    // se puede detecar si se esta en desde un celular
    var isMobile = AFRAME.utils.device.isMobile();

    if (isMobile) {
    var particles = document.getElementById('particles');
    particles.parentNode.removeChild(particles);


    }


  /*   funciones de NINUS -------------------------------------------------------------------------------------------- */
    
    function myFunction() {
        var x = document.getElementById("myDIV");
        var img1 = "https://i.ibb.co/qCP7qrf/ocultar-video.png";
        var img2 = "https://i.ibb.co/ZWGP6VH/ver-video.png";
        var imgElement = document.getElementById('toggleImage');
      
        
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
        
        imgElement.src = (imgElement.src === img1)? img2 : img1;
      }

      function myFunction2() {
        var x = document.getElementById("myDIV2");
        var img1 = "https://i.ibb.co/KDsKdXf/ver-guia.png";
        var img2 = "https://i.ibb.co/Mk45KKj/ocultar-guia.png";
        var imgElement = document.getElementById('toggleImage3');
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
        imgElement.src = (imgElement.src === img1)? img2 : img1;
      }


      function myFunction3() {
        var x = document.getElementById("myDIV3");
        var img1 = "https://i.ibb.co/qCP7qrf/ocultar-video.png";
        var img2 = "https://i.ibb.co/ZWGP6VH/ver-video.png";
        var imgElement = document.getElementById('toggleImage2');
        
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
        imgElement.src = (imgElement.src === img1)? img2 : img1;
      }


      function myFunction4() {
        var x = document.getElementById("myDIV4");
        var img1 = "https://i.ibb.co/KDsKdXf/ver-guia.png";
        var img2 = "https://i.ibb.co/Mk45KKj/ocultar-guia.png";
        var imgElement = document.getElementById('toggleImage4');
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
         imgElement.src = (imgElement.src === img1)? img2 : img1;
      }

      /*   funciones de NINUS -------------------------------------------------------------------------------------------- */