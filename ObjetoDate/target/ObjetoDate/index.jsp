<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Objeto Date</title>
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="style/responsive.css">
    <script src="script/script.js"></script>
</head>
<body>
<div class="container"></div>
<h2>Objetos de tipo DATE</h2>
<table>
    <tr>
        <td>
            <button id="fechaHoy" class="boton">Ver Fecha de Hoy</button>
        </td>
        <td>
            <button id="diaHoy" class="boton">Hoy es?</button>
        </td>
        <td>
            <button id="mesActual" class="boton">Y el mes?</button>
        </td>
        <td>
            <button id="anioActual" class="boton">Año actual?</button>
        </td>
        <td>
            <button id="fechaCompleta" class="boton">Fecha completa?</button>
        </td>
        <td>
            <button id="hora" class="boton">Que hora es?</button>
        </td>
    </tr>
</table>

<p id="salida"></p>
</body>
</html>