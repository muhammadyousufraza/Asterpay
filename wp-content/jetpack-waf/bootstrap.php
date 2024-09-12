<?php
define( 'DISABLE_JETPACK_WAF', false );
if ( defined( 'DISABLE_JETPACK_WAF' ) && DISABLE_JETPACK_WAF ) return;
define( 'JETPACK_WAF_MODE', 'silent' );
define( 'JETPACK_WAF_SHARE_DATA', false );
define( 'JETPACK_WAF_SHARE_DEBUG_DATA', false );
define( 'JETPACK_WAF_DIR', '/home2/svokjimy/public_html/.website_33d48dca/wp-content/jetpack-waf' );
define( 'JETPACK_WAF_WPCONFIG', '/home2/svokjimy/public_html/.website_33d48dca/wp-content/../wp-config.php' );
require_once '/home2/svokjimy/public_html/.website_33d48dca/wp-content/plugins/jetpack/vendor/autoload.php';
Automattic\Jetpack\Waf\Waf_Runner::initialize();
