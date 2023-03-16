<?php
if(isset($_POST['submit'])) {
  $to = "sedfsdf45@gmail.com"; // Your email address
  $subject = "Brief Form Submission"; // Email subject
  $name = $_POST['brief-name']; // Sender's name
  $company = $_POST['company']; // Company name
  $phone = $_POST['phone']; // Phone number
  $email = $_POST['email']; // Sender's email address
  $deadline = $_POST['deadline']; // Deadline
  $material = $_POST['material']; // Material type
  $object = $_POST['object']; // Object being advertised
  $fitches = $_POST['fitches']; // Unique selling proposition
  $subject = $_POST['subject']; // Target audience
  $format = $_POST['format']; // Material format

  $message = "
  <html>
  <head>
    <title>Brief Form Submission</title>
    <style>
      /* CSS styling */
      body {
        font-family: Arial, sans-serif;
        font-size: 14px;
        color: #333;
      }
      .brief-table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      .brief-table th,
      .brief-table td {
        padding: 10px;
        border: 1px solid #ccc;
      }
      .brief-table th {
        background-color: #f2f2f2;
      }
    </style>
  </head>
  <body>
    <h2>Brief Form Submission</h2>
    <table class='brief-table'>
      <tr>
        <th>Name</th>
        <td>$name</td>
      </tr>
      <tr>
        <th>Company</th>
        <td>$company</td>
      </tr>
      <tr>
        <th>Phone</th>
        <td>$phone</td>
      </tr>
      <tr>
        <th>Email</th>
        <td>$email</td>
      </tr>
      <tr>
        <th>Deadline</th>
        <td>$deadline</td>
      </tr>
      <tr>
        <th>Material Type</th>
        <td>$material</td>
      </tr>
      <tr>
        <th>Object Being Advertised</th>
        <td>$object</td>
      </tr>
      <tr>
        <th>Unique Selling Proposition</th>
        <td>$fitches</td>
      </tr>
      <tr>
        <th>Target Audience</th>
        <td>$subject</td>
      </tr>
      <tr>
        <th>Material Format</th>
        <td>$format</td>
      </tr>
    </table>
  </body>
  </html>
  ";

  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-type: text/html\r\n";

  mail($to, $subject, $message, $headers);

  if(mail($to, $subject, $message, $headers)){
    echo "<script>alert('Благодарим вас за заполнение анкеты!</br> Наш менеджер свяжется с вами в течении дня.');</script>";
  }
  else{
    echo "<script>alert('Упс, что-то пошло не так.');</script>";
  }


  // header('Location: index.html');
  exit;
}
?>
