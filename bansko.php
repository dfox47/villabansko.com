


<?php
$themeFolder    = '/templates/vb';
$i              = '/images';
?>

<!DOCTYPE html>

<html lang="en">

<head>
	<meta name="viewport" content="width=device-width" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<link rel="icon" href="<?php echo $i; ?>/favicon/favicon.ico" type="image/x-icon" />
	<link rel="shortcut icon" href="<?php echo $i; ?>/favicon/favicon.ico" type="image/x-icon">

	<link rel="icon" type="image/png" href="<?php echo $i; ?>/favicon/16.png" sizes="16x16" />
	<link rel="icon" type="image/png" href="<?php echo $i; ?>/favicon/32.png" sizes="32x32" />
	<link rel="icon" type="image/png" href="<?php echo $i; ?>/favicon/96.png" sizes="96x96" />

	<link rel="apple-touch-icon" sizes="57x57" href="<?php echo $i; ?>/favicon/57.png" />
	<link rel="apple-touch-icon" sizes="60x60" href="<?php echo $i; ?>/favicon/60.png" />
	<link rel="apple-touch-icon" sizes="72x72" href="<?php echo $i; ?>/favicon/72.png" />
	<link rel="apple-touch-icon" sizes="76x76" href="<?php echo $i; ?>/favicon/76.png" />
	<link rel="apple-touch-icon" sizes="114x114" href="<?php echo $i; ?>/favicon/114.png" />
	<link rel="apple-touch-icon" sizes="120x120" href="<?php echo $i; ?>/favicon/120.png" />
	<link rel="apple-touch-icon" sizes="144x144" href="<?php echo $i; ?>/favicon/144.png" />
	<link rel="apple-touch-icon" sizes="152x152" href="<?php echo $i; ?>/favicon/152.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="<?php echo $i; ?>/favicon/180.png" />

	<title>Bansko | Where to go</title>

	<link rel="stylesheet" href="<?php echo $themeFolder; ?>/styles.min.css?v<?php echo(date("YmdHis")); ?>" />
</head>

<body>
<div class="bansko">
	<h1>Bansko | Where to go</h1>

	<div>
		<iframe class="bansko_map" src="https://www.google.com/maps/d/embed?mid=15RdHSeSp37k1KMTMnLNsaPGkKK8AH0dq&hl=en&ehbc=2E312F" width="640" height="480"></iframe>
	</div>

	<div class="text-center">
		<h3 class="text-center">Contacts:</h3>

		<p>
			<a class="bansko_phone" href="tel:+359876700151">+359 (87) 67-00-151</a>
		</p>

		<ul class="bansko_messangers">
			<li><a href="https://api.whatsapp.com/send?phone=359876700151" target="_blank">WhatsApp</a></li>
			<li><a href="viber://chat/?number=359876700151" target="_blank">Viber</a></li>
		</ul>
	</div>
</div>
</body>
</html>


