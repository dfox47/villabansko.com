<?php header('Content-Type: text/html;charset=utf-8'); ?>

<?php defined( '_JEXEC' ) or die( 'Restricted access' ); ?>

<?php $lang			= JFactory::getLanguage();
$languages			= JLanguageHelper::getLanguages('lang_code');
$languageTag		= $lang->getTag();
$languageCode		= $languages[ $lang->getTag() ]->sef;
$languageName		= $lang->getName(); ?>

<!DOCTYPE html>

<html lang="<?php echo $languageCode; ?>">

<head>
	<?php $this->setGenerator(null);

	unset($this->_scripts[$this->baseurl.'/media/system/js/mootools-core.js'],
	$this->_scripts[$this->baseurl.'/media/system/js/mootools-more.js'],
	$this->_scripts[$this->baseurl.'/media/system/js/core.js'],
	$this->_scripts[$this->baseurl.'/media/system/js/caption.js'],
	$this->_scripts[$this->baseurl.'/media/jui/js/jquery.min.js'],
	$this->_scripts[$this->baseurl.'/media/jui/js/bootstrap.min.js'],
	$this->_scripts[$this->baseurl.'/media/jui/js/jquery-noconflict.js'],
	$this->_scripts[$this->baseurl.'/media/jui/js/jquery-migrate.min.js']); ?>

	<meta content="width=device-width, user-scalable=yes, maximum-scale=5" name="viewport" />

	<link rel="icon" href="/images/favicon.ico" type="image/x-icon" />

	<link rel="icon" type="image/png" href="/images/favicon/16.png" sizes="16x16" />
	<link rel="icon" type="image/png" href="/images/favicon/32.png" sizes="32x32" />
	<link rel="icon" type="image/png" href="/images/favicon/96.png" sizes="96x96" />

	<link rel="apple-touch-icon" sizes="57x57" href="/images/favicon/57.png" />
	<link rel="apple-touch-icon" sizes="60x60" href="/images/favicon/60.png" />
	<link rel="apple-touch-icon" sizes="72x72" href="/images/favicon/72.png" />
	<link rel="apple-touch-icon" sizes="76x76" href="/images/favicon/76.png" />
	<link rel="apple-touch-icon" sizes="114x114" href="/images/favicon/114.png" />
	<link rel="apple-touch-icon" sizes="120x120" href="/images/favicon/120.png" />
	<link rel="apple-touch-icon" sizes="144x144" href="/images/favicon/144.png" />
	<link rel="apple-touch-icon" sizes="152x152" href="/images/favicon/152.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/180.png" />

	<!--[if lt IE 9]>
		<script src="//html5shrelim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->



	<jdoc:include type="head" />

	<link rel="stylesheet" href="/templates/vb/styles.min.css" />
</head>

<?php $menu = 0;
$app = JFactory::getApplication();
$menu = $app->getMenu()->getActive()->id; ?>

<body class="menu_id_<?php echo $menu ?>_<?php echo JRequest::getInt('id'); ?> no_js preload">
	<div class="popup">
		<div class="popup_bg"></div>

		<div class="popup_content">
			<img class="popup_close" src="/images/close.png" alt="" />

			<div class="popup_content_ajax"></div>
		</div>
	</div>

	<div class="popup2">
		<div class="popup_bg"></div>

		<div class="popup_content">
			<img class="popup_close" src="/images/close.png" alt="" />

			<div class="popup_content_ajax"></div>
		</div>
	</div>

	<?php if($this->countModules('topmenu')) : ?>
		<div class="mobile_menu"><jdoc:include type="modules" name="topmenu" style="none" /></div>
	<?php endif; ?>

	<jdoc:include type="message" />

	<div class="header">
		<?php if($this->countModules('topmenu_inside')) : ?>
			<div class="topmenu_inside"><jdoc:include type="modules" name="topmenu_inside" style="none" /></div>
		<?php endif; ?>

		<?php if($this->countModules('topmenu')) : ?>
			<div class="topmenu"><jdoc:include type="modules" name="topmenu" style="none" /></div>
		<?php endif; ?>

		<?php if($this->countModules('header')) : ?><jdoc:include type="modules" name="header" style="none" /><?php endif; ?>
	</div>

	<?php if($this->countModules('breadcrumbs')) : ?><jdoc:include type="modules" name="breadcrumbs" style="none" /><?php endif; ?>

	<?php if($this->countModules('blocks_home')) : ?><jdoc:include type="modules" name="blocks_home" style="none" /><?php endif; ?>

	<jdoc:include type="component" />
	<jdoc:include type="modules" name="content" style="xhtml" />

	<?php if($this->countModules('footer')) : ?><jdoc:include type="modules" name="footer" style="none" /><?php endif; ?>

	<?php if($this->countModules('counters')) : ?><jdoc:include type="modules" name="counters" style="none" /><?php endif; ?>

	<div class="powered_by">{source}<?php echo JText::_('POWERED_BY'); ?>{/source} <a href="//foxartbox.com" target="_blank">FOXARTBOX</a></div>



	<script src="//www.google.com/recaptcha/api.js" async defer></script>

	<!-- all scripts in one document -->
	<script src="/templates/<?php echo $this->template; ?>/all.min.js?v3"></script>

	<script src="//code-ya.jivosite.com/widget/VbnP1QHB7S" async></script>
</body>

</html>
