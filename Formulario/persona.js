document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('regisForm'); //Mencion a que elemento estamos haciendo referencia.
    const mensajeError = document.getElementById('mensajeError'); //Selecciona el elemento de error.

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = form.nombredePersona.value;  // Obtienen  el valor del campo de texto con el ID 
        //Declaración de una variable: const nombre
        //form.nombredePersona: Accede a ese ID especifio del formulario antes referenciado.
        //.value: Especificamos que ingresamos al valor que tiene ese ID
        const apellidos = form.apellidosPersona.value;
        const correo = form.correoPersona.value;
        const fechaNacimiento = new Date(form.fechaPersona.value);
        const telefono = form.telefonoPersona.value;
        const usuario = form.usuarioPersona.value;
        const contraseña = form.contraseñaPersona.value;
        const reContraseña = form.reContraseñaPersona.value;

        mensajeError.textContent = ''; //El mensaje de error se mostrara vacio si no se cumple ninguna condición.

        
        //Si la contraseña y la confirmación de contraseña no son iguales el contenido del error mensaje sera:
        //"Las contraseñas no coinciden"
        if (contraseña !== reContraseña) {
            mensajeError.textContent = 'Las contraseñas no coinciden';
            return;
        }


        //Si la contraseña tiene menos de 5 caracteres el contenido del error del mensaje será:
        // "La contraseña es insegura"
        if (contraseña.length < 5) {
            mensajeError.textContent = 'La contraseña es insegura';
            return;
        }

        
        // Calcula la edad del usuario a partir de su fecha de nacimiento
        const edad = calcularEdad(fechaNacimiento);

       // Crea un objeto con los datos del usuario
        const datosUsuario = {
            nombre,
            apellidos,
            correo,
            telefono,
            edad,
        };

// Llama a la función para mostrar los datos del usuario en una nueva página
        mostrarDatosUsuario(datosUsuario);
    });

    function calcularEdad(fechaNacimiento) {
        const hoy = new Date(); // Obtiene la fecha actual
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear(); // Calcula la diferencia en años
        const mes = hoy.getMonth() - fechaNacimiento.getMonth(); // Calcula la diferencia en meses
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) { // Si el mes actual es anterior al mes de
        // nacimiento, o es el mismo mes pero el día actual es anterior al día de nacimiento, se resta un año
            edad--;
        }
        //Regresa la edad calculada
        return edad;
    }

// Función para mostrar los datos del usuario en una nueva ventana/página
    function mostrarDatosUsuario(datos) {
        const nuevaPagina = window.open('', '_blank'); // Abre una nueva ventana/pestaña del navegador
        // Escribe el contenido HTML en la nueva ventana/página
        nuevaPagina.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <title>Datos del Usuario</title>
            </head>
            <body>
                <h1>${datos.nombre}</h1>
                <h2>${datos.apellidos}</h2>
                <a href="mailto:${datos.correo}">${datos.correo}</a><br>
                <a href="tel:${datos.telefono}">${datos.telefono}</a><br>
                <p>Edad: ${datos.edad}</p>
            </body>
            </html>
        `);
        nuevaPagina.document.close(); // Cierra el documento para que el navegador pueda renderizar el contenido
    }
});

