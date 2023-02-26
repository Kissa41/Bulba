<?php
    use PHPMailer/PHPMailer/PHPMailer;
    use PHPMailer/PHPMailer/Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8'
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    $mail->setFrom('nastyagoncharenko5@gmail.com', 'Гончаренко Анастасия');
    $mail->addAddress('nastyagoncharenko5@gmail.com');
    $mail->Subject = '"Гончаренко Анастасия"';

    $body = '<h1>Встречайте супер письмо!</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['phone']))){
        $body.='<p><strong>Phone:</strong> '.$_POST['phone'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['message']))){
        $body.='<p><strong>Comment:</strong> '.$_POST['message'].'</p>';
    }

    $mail->Body = $body;

    if (!$mail->send()) {
        $message = 'Error';
    } else {
        $message = 'Succes!'
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>