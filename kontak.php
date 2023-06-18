<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kontak Tamu</title>
</head>
<body>
    <?php
        $nama    = $_POST['nama'];
        $email   = $_POST['email'];
        $telfon  = $_POST['telfon'];
        $pesan   = $_POST['pesan'];
    ?>
    <h1 align="center"><u>TABEL Kontak Tamu</u></h1>
    <table align="center" border="1" cellspacing="4" cellpadding="10">
        <tr>
            <th colspan="4" align="center">Data Kontak Tamu</th>
        </tr>
        <tr>
            <td>Nama</td>
            <td>Email</td>
            <td>Telfon</td>
            <td>Pesan</td>
        </tr>
        <tr>
            <td><?php echo $nama; ?></td>
            <td><?php echo $email; ?></td>
            <td><?php echo $telfon; ?></td>
            <td><?php echo $pesan; ?></td>
        </tr>
    </table>
    <a href="kontak.html">SILAHKAN BALIK KE WEBSITE</a>
</body>
</html>