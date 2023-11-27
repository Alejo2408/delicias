document.addEventListener("DOMContentLoaded", function () {
    // Cargar comentarios existentes al cargar la página
    loadComments();
});

function loadComments() {
    // Llamar al script de GitHub Gists para cargar los comentarios
    // Asegúrate de reemplazar "Alejo2408" y "907a6b4f90af4dcf9adeaf642b16536a.js" con tus propias credenciales de GitHub Gists.
}

function addComment() {
    // Obtener el texto del comentario
    var commentText = document.getElementById("comment-text").value;

    // Validar que el comentario no esté vacío
    if (commentText.trim() === "") {
        alert("Por favor, escribe un comentario antes de enviar.");
        return;
    }

    // Obtener los comentarios almacenados en GitHub Gists
    // Añadir el nuevo comentario al archivo
    // Actualizar el script de GitHub Gists para reflejar los cambios
    // Ten en cuenta que modificar GitHub Gists puede requerir autenticación si es privado.

    // Limpiar el cuadro de comentarios
    document.getElementById("comment-text").value = "";
}
