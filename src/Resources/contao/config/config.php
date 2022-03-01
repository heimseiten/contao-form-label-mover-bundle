<?php

if (TL_MODE == 'FE') {
    $GLOBALS['TL_HEAD'][] = '<script defer src="/bundles/heimseitencontaoformlabelmover/formlabelmover.js"></script>';
    $GLOBALS['TL_CSS'][] = 'bundles/heimseitencontaoformlabelmover/formlabelmover.scss|static';
}
