<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//�� ����
	$mail->setFrom('romanovvostrik@gmail.com', '������� �������');
	//����
	$mail->addAddress('rmnvstrkv@gmail.com');
	//���� ������
	$mail->Subject = '������!';

	//����
	$hand = "������";
	if($_POST['hand'] == "left"){
		$hand = "�����";
	}


	//���� ������
	$body = '<h1>���������� ����� ������!</h1>';

	if(trim(!empty($_POST['username']))){
		$body.='<p><strong>���:</strong> '.$_POST['username'].'</p>';
	}
	if(trim(!empty($_POST['usersurname']))){
		$body.='<p><strong>�������:</strong> '.$_POST['usersurname'].'</p>';
	}
	if(trim(!empty($_POST['usermail']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['usermail'].'</p>';
	}
	if(trim(!empty($_POST['hand']))){
		$body.='<p><strong>����:</strong> '.$hand.'</p>';
	}
	if(trim(!empty($_POST['message']))){
		$body.='<p><strong>���������:</strong> '.$_POST['message'].'</p>';
	}


	$mail->Body = $body;

	if (!$mail->send()) {
		$message - '������';
	} else {
		$message = '������ ����������!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>


