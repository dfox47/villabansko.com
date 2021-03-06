<?php defined('_JEXEC') or die; ?>

<ul class="<?php echo $class_sfx;?>"<?php
	$tag = '';

	if ($params->get('tag_id') != null) {
		$tag = $params->get('tag_id') . '';
		echo ' id="' . $tag . '"';
	}
?>>
	<?php foreach ($list as $i => &$item) {
		$class = 'item-' . $item->id;

		if (($item->id == $active_id) OR ($item->type == 'alias' AND $item->params->get('aliasoptions') == $active_id)) {
			$class .= ' current';
		}

		if (in_array($item->id, $path)) {
			$class .= ' active';
		}
		elseif ($item->type == 'alias') {
			$aliasToId = $item->params->get('aliasoptions');

			if (count($path) > 0 && $aliasToId == $path[count($path) - 1]) {
				$class .= ' active';
			}
			elseif (in_array($aliasToId, $path)) {
				$class .= ' alias-parent-active';
			}
		}

		if ($item->type == 'separator') {
			$class .= ' divider';
		}

		if ($item->deeper) {
			$class .= ' deeper';
		}

		if ($item->parent) {
			$class .= ' parent';
		}

		if (!empty($class)) {
			$class = ' class="' . trim($class) . '"';
		}

		echo '<li' . $class . '>';

		switch ($item->type) :
			case 'separator':
			case 'url':
			case 'component':
			case 'heading':
				require JModuleHelper::getLayoutPath('mod_menu', 'default_' . $item->type);
				break;

			default:
				require JModuleHelper::getLayoutPath('mod_menu', 'default_url');
				break;
		endswitch;

		if ($item->deeper) {
			echo '<ul class="nav-child unstyled small">';
		}
		elseif ($item->shallower) {
			echo '</li>';
			echo str_repeat('</ul></li>', $item->level_diff);
		}
		else {
			echo '</li>';
		}
	} ?>
</ul>
