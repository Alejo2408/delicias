<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $comentario = $_POST["comentario"];

    // Guardar el comentario en un archivo de texto
    $archivo = 'comentarios.txt';
    $contenido = file_get_contents($archivo);
    $nuevoComentario = "$nombre: $comentario\n";
    file_put_contents($archivo, $nuevoComentario . $contenido);
}

// Redirigir de vuelta a la página de inicio
header("Location: index.php");
?>
