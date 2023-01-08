<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PPHPMailer.php';
    
    $mail = new PHPMailer(true);
    $mail -> Charset = 'UTF-8';
    $mail->setLanguage('ru','phpmailer/language/');
    $mail->IsHTML(true);

    //От кого письмо
    
    //Кому письмо
    $mail->addAddress('kristina.zaharenkova00@mail.ru')
    //тело письма
    $body = '<h1>Новая заявка</h1>';
    if(trim(!empty($_POST['Name']))){
        $body.='<p><strong>Имя:<strong>'.$_POST['Name'].'</p>';
    }
    if(trim(!empty($_POST['Mail']))){
        $body.='<p><strong>E-mail:<strong>'.$_POST['Mail'].'</p>';
    }
    if(trim(!empty($_POST['Phone']))){
        $body.='<p><strong>Номер телефона:<strong>'.$_POST['Phone'].'</p>';
    }
    if(trim(!empty($_POST['Info']))){
        $body.='<p><strong>Информация:<strong>'.$_POST['Info'].'</p>';
    }

    //Прикрепить файлы
    if(!empty($_POST['Files']['tmp_name'])){
        //путь загрузки файла
        $filePath = __DIR__."/files/".$_FILES['Files']['name'];
        //сгрузим файлы
        if (copy($_FILES['Files']['tmp_name'],$filePath)){
            $fileAttach=$filePath;
            $body.='<p><strong>Проект:</strong>';
            $mail->addAttachment($fileAttach);
        }
    }
    $mail->Body = $body;

    //Отправляем
    if (!$mail->send()){
        $message = 'Ошибка';
    }else{
        $message = 'Данные отправлены!';
    }
    $response = ['message'=>$message];
    header('Content-type: application/json');
    echo json_encode($response);

?>
