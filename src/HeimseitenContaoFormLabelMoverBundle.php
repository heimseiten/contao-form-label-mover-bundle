<?php

declare(strict_types=1);

/*
 * This file is part of form label mover.
 * 
 * (c) heimseiten.de - Webdesign aus Köln 2022 <info@heimseiten.de>
 * @license GPL-3.0-or-later
 * For the full copyright and license information,
 * please view the LICENSE file that was distributed with this source code.
 * @link https://github.com/heimseiten/contao-form-label-mover-bundle
 */

namespace Heimseiten\ContaoFormLabelMoverBundle;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;

/**
 * Class HeimseitenContaoFormLabelMoverBundle
 */
class HeimseitenContaoFormLabelMoverBundle extends Bundle
{
	/**
	 * {@inheritdoc}
	 */
	public function build(ContainerBuilder $container): void
	{
		parent::build($container);
		
	}
}
