
<?php

header("Location: https://autovolt.pro");

$phone = $_POST['phone'];
$name = $_POST['name'];
$problem = $_POST['problem'];

//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Имя: ' => $name,
        'Телефон: ' => $phone,
        'Проблема: ' => $problem
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .=$key.$value."%0A";
    };

$ch = curl_init('https://api.telegram.org/bot1930723186:AAEVMcvae0QQnRv-u7_KElzK5gH3trxekps/sendMessage?chat_id=881897508&text='.$txt); // URL
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Не возвращать ответ
curl_exec($ch); // Делаем запрос
curl_close($ch);

?>
