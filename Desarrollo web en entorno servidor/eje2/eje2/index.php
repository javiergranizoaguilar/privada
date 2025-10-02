<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Title</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <?php include "config.php"?>

</head>

<body>
<?php include "header.php"?>
<article>
    <h1>Daily Memes</h1>
    <?php ?>
    <?php   //(int) = parse int
    // el date se que me devuelve un string de 2 diguitos por lo que cojo el ultimo y le ago un parse int.
    // Los string son arrais especiales por lo que sigen normas parecidas
    $numberimgs=(int) date("s")[1]?>
    <img src="./imagenes/<?php echo nameimgs[$numberimgs];?>.jpeg" alt="Meme del día">
</article>
<?php include "footer.php"?>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>