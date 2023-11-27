// script.js
document.addEventListener('DOMContentLoaded', function () {
    cargarComentarios();
});

function agregarComentario() {
    var nombre = document.getElementById('nombre').value;
    var comentario = document.getElementById('comentario').value;

    if (nombre && comentario) {
        var nuevoComentario = {
            nombre: nombre,
            comentario: comentario
        };

        var comentariosExistente = obtenerComentarios();
        comentariosExistente.push(nuevoComentario);

        localStorage.setItem('comentarios', JSON.stringify(comentariosExistente));

        // Limpiar y volver a cargar los comentarios
        document.getElementById('nombre').value = '';
        document.getElementById('comentario').value = '';
        cargarComentarios();
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function cargarComentarios() {
    var comentariosExistente = obtenerComentarios();
    var listaComentarios = document.getElementById('lista-comentarios');
    listaComentarios.innerHTML = '';

    if (comentariosExistente.length > 0) {
        comentariosExistente.forEach(function (comentario) {
            var li = document.createElement('li');
            li.textContent = `${comentario.nombre}: ${comentario.comentario}`;
            listaComentarios.appendChild(li);
        });
    } else {
        var mensajeVacio = document.createElement('p');
        mensajeVacio.textContent = 'No hay comentarios aún.';
        listaComentarios.appendChild(mensajeVacio);
    }
}

function obtenerComentarios() {
    var comentariosExistente = localStorage.getItem('comentarios');

    if (comentariosExistente) {
        return JSON.parse(comentariosExistente);
    } else {
        return [];
    }
}
