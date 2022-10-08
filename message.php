<?php
  $name = ($_POST['name']);
  $email = ($_POST['email']);
  $phone = ($_POST['phone']);
  $website = ($_POST['website']);
  $message = ($_POST['message']);
  if(!empty($email) && !empty($message)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      $receiver = "wesleymarquees329@gmail.com";
      $subject = "From: $name <$email>";
      $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\n\nMessage:\n$message\n\nRegards,\n$name";
      $sender = "From: $email";
      if(mail($receiver, $subject, $body, $sender)){
         echo "Sua mensagem foi enviada";
      }else{
         echo "Desculpe, ocorreu um erro ao enviar sua mensagem!";
      }
    }else{
      echo "Entre com um email válido";
    }
  }else{
    echo "Preencha seu email e o campo de mensagem!";
  }
?>
