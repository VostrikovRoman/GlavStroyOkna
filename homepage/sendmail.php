<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого
	$mail->setFrom('romanovvostrik@gmail.com', 'Вострик Романов');
	//Кому
	$mail->addAddress('rmnvstrkv@gmail.com');
	//Тема письма
	$mail->Subject = 'Привет!';

	//Рука
	$hand = "Правая";
	if($_POST['hand'] == "left"){
		$hand = "Левая";
	}


	//Тело письма
	$body = '<h1>Встречайте супер письмо!</h1>';

	if(trim(!empty($_POST['username']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['username'].'</p>';
	}
	if(trim(!empty($_POST['usersurname']))){
		$body.='<p><strong>Фамилия:</strong> '.$_POST['usersurname'].'</p>';
	}
	if(trim(!empty($_POST['usermail']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['usermail'].'</p>';
	}
	if(trim(!empty($_POST['hand']))){
		$body.='<p><strong>Рука:</strong> '.$hand.'</p>';
	}
	if(trim(!empty($_POST['message']))){
		$body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
	}


	$mail->Body = $body;

	if (!$mail->send()) {
		$message - 'Ошибка';
	} else {
		$message = 'Данные отправлены!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>


