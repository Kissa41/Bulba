<?php
if(isset($_POST['submit'])){
    $to = "sedfsdf45@gmail.com";
    $subject = "Form Submission";
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['mail'];
    $comment = $_POST['message'];
    $page_url = $_POST['page_url'];
    $message = "Name: ".$name."\nPhone: ".$phone."\nEmail: ".$email."\nComment: ".$comment."\nPage URL: ".$page_url;
    $headers = "From: ".$email."\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $html_message = '
    <html>
    <head>
        <meta charset="utf-8">
        <title>Form Submission</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                font-size: 16px;
                color: #333;
            }
            h1 {
                color: #0084ff;
                margin-top: 0;
                margin-bottom: 20px;
            }
            table {
                border-collapse: collapse;
                width: 100%;
                margin-bottom: 20px;
            }
            th, td {
                text-align: left;
                padding: 8px;
                border: 1px solid #ddd;
            }
            th {
                background-color: #f2f2f2;
            }
            .footer {
                margin-top: 20px;
                font-size: 14px;
                color: #777;
            }
        </style>
    </head>
    <body>
        <h1>Form Submission</h1>
        <table>
            <tr>
                <th>Name</th>
                <td>'.$name.'</td>
            </tr>
            <tr>
                <th>Phone</th>
                <td>'.$phone.'</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>'.$email.'</td>
            </tr>
            <tr>
                <th>Comment</th>
                <td>'.$comment.'</td>
            </tr>
            <tr>
                <th>Page URL</th>
                <td>'.$page_url.'</td>
            </tr>
        </table>
        <div class="footer">
            <p>This email was sent automatically. Please do not reply to this email.</p>
        </div>
    </body>
    </html>
    ';

    if(mail($to, $subject, $message, $headers)){
        echo "<script>alert('Благодарим вас за заполнение анкеты!</br> Наш менеджер свяжется с вами в течении дня.');</script>";
    }
    else{
        echo "<script>alert('Упс, что-то пошло не так.');</script>";
    }
}
?>
