<?php
    $nombre = $_POST['fname'];
    $correo = $_POST['email'];
    $telefono = $_POST['tel'];
    $comentarios = $_POST['comentarios'];

    $ip = $_SERVER['REMOTE_ADDR'];
    $captcha = $_POST['g-recaptcha-response'];
    $secretKey = "6LddijMhAAAAAJBFYNRsEHax7PyngJN_y4sWFna-";

    $res = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$captcha&remoteip=$ip");

    $atributos = json_decode($res, TRUE);

    // $errors = array();
    if (!$atributos['success']) {
        $errors[] = 'Verificación captcha obligatoria';
    }
    if (count($errors) == 0) {
        ini_set( 'display_errors', 1 );
        error_reporting( E_ALL );

        $from = 'admin@pvj.mx';
        $to = "fgcarpinteria@pvj.mx";
        $subject = "Contacto FG Carpinteria";

        $message = "NOMBRE : " . $nombre  . ",\r\n";
        $message .= "CORREO : " . $correo . " \r\n";
        $message .= "TELEFONO : " . $telefono . " \r\n";
        $message .= "IP : " . $ip . " \r\n";
        $message .= "COMENTARIOS : " . $comentarios . " \r\n";

        $headers = "From:" . $from . " \r\n";
        $headers .= "X-Mailer: PHP/" . phpversion() . " \r\n";
        $headers .= "Mime-Version: 1.0 \r\n";
        $headers .= "Content-Type: text/plain";
        mail($to,$subject, utf8_decode($message), $headers);
        echo "The email message was sent.";
        
        header("Location:https://fgcarpinteria.pvj.mx");
    }
?>