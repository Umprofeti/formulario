<?php 
//Variables

use PHPMailer\PHPMailer\PHPMailer;
require 'vendor/autoload.php';

    $usuario = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $telefono = $_POST['celular'];
    $email = $_POST['correoElectronico'];
    $ig = $_POST['ig'];

$mail = new PHPMailer;
$mail->isSMTP();
$mail->SMTPDebug = 0;
$mail->Host = 'rendezvouscorp.com ';
$mail->Port = 465;
$mail->SMTPAuth = true;
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;  
$mail->Username = 'giveaway@rendezvouscorp.com';
$mail->Password = '0eoqd*}#m-iZ';
$mail->setFrom('giveaway@rendezvouscorp.com', 'Giveaway');
$mail->addReplyTo('giveaway@rendezvouscorp.com', 'Giveaway');
$mail->addAddress('vansthewall16@gmail.com', 'Jonathan');
$mail->addAddress('jonathanr0311@protonmail.com', 'Jonathan');
$mail->isHTML(true); 
$mail->Subject = 'Nuevo usuario inscrito: '.$ig;
$mail->msgHTML(file_get_contents('message.html'), __DIR__);
$mail->Body = '<style>
    table, th, td {
        border:1px solid black;
    }
    .titulo{
        display: flex;
        justify-content:center;

    }
</style>
    <h2 class="titulo" style="margin-bottom: 4%;display:flex;justify-content:center;"> Nueva persona para el registro: '.$usuario.' '.$apellido.'</h2>
<table class="table" style="width:100%">
<tr>
  <th>#</th>
  <th>Nombre</th>
  <th>Apellido</th>
  <th>Correo</th>
  <th>Whatsapp</th>
  <th>Instagram</th>
</tr>1</td>
    <td>'.$usuario.'</td>
    <td>'.$apellido.'</td>
    <td>'.$email.'</td>
    <td>'.$telefono.'</td>
    <td>'.$ig.'</td>
</tr>
</table>';
//$mail->addAttachment('test.txt');
if (!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'The email message was sent.';
}
?>
    