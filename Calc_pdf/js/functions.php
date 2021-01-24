<?php


/* ==========================================================================
 *  Theme settings
 * ========================================================================== */
if ( ! function_exists( 'basic_setup' ) ) :
	function basic_setup() {

		if ( ! isset( $content_width ) ) {
			$content_width = 725;
		}

		load_theme_textdomain( 'basic-delux', get_template_directory() . '/languages' );

		add_theme_support( 'woocommerce' );
		add_theme_support( 'bbpress' );

		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'post-thumbnails' );
		add_image_size( 'rectangle-thumbnail', 300, 200, true);
		add_theme_support( 'title-tag' );
		add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );


		add_theme_support( 'custom-background', apply_filters( 'basic_custom_background_args', array( 'default-color' => 'ffffff' ) ) );
		add_theme_support( 'custom-header', array(
			'width'       => 1080,
			'height'      => 190,
			'flex-height' => true,
		) );

		register_nav_menus( array(
			'top'    => __( 'Main Menu', 'basic-delux' ),
			'bottom' => __( 'Footer Menu', 'basic-delux' )
		) );


		// logo
		$args = array();
		$lpos = get_theme_mod( 'display_logo_and_title' );
		if ( false === $lpos || 'image' == $lpos ) {
			$args['header-text'] = array( 'blog-name' );
		}
		add_theme_support( 'custom-logo', $args );

	}
endif;
add_action( 'after_setup_theme', 'basic_setup' );
/* ========================================================================== */


/* ==========================================================================
 *  Load scripts and styles
 * ========================================================================== */
if ( ! function_exists( 'basic_enqueue_style_and_script' ) ) :
	function basic_enqueue_style_and_script() {

		global $post, $wp_query;

		// STYLES
		wp_enqueue_style( 'basic-style', get_stylesheet_uri() , array(), true );

		// SCRIPTS
		wp_enqueue_script( 'basic-html5shiv', get_template_directory_uri() . '/js/html5shiv.min.js', array(), '3.7.3', true );
		wp_script_add_data( 'basic-html5shiv', 'conditional', 'lt IE 9' );

		wp_enqueue_script( 'basic-scripts', get_template_directory_uri() . '/js/functions.js', array( 'jquery' ), true, true );
		wp_enqueue_script( 'basic-common', get_template_directory_uri() . '/js/common.js', array( 'jquery' ), true, true );
        wp_enqueue_script( 'basic-common', get_template_directory_uri() . '/js/scriptsvid.js', array( 'jquery' ), true, true );

		if ( is_singular() ) {
			$socbtns = basic_get_theme_option( 'social_share' );

			if ( 'yandex' == $socbtns ) {
				wp_enqueue_script( 'basic-yandexshare', '//yastatic.net/share2/share.js', array(), true, true );
			}

			if ( comments_open() && get_option( 'thread_comments' ) ) {
				wp_enqueue_script( 'comment-reply', false, true, true );
			}
		}

	}
endif;
add_action( 'wp_enqueue_scripts', 'basic_enqueue_style_and_script' );
/* ========================================================================== */


/* ==========================================================================
 *  admin area
 * ========================================================================== */
if ( ! function_exists( 'basic_editor_styles' ) ) :
	function basic_editor_styles() {
		add_editor_style( 'editor-style.css' );
	}
endif;
add_action( 'admin_init', 'basic_editor_styles' );
/* ========================================================================== */


/* ==========================================================================
 *  Register widget area
 * ========================================================================== */
if ( ! function_exists( 'basic_widgets_init' ) ) :
	function basic_widgets_init() {

		register_sidebar( array(
			'name'          => __( 'Sidebar', 'basic-delux' ),
			'id'            => 'sidebar',
			'description'   => __( 'Add widgets here to appear in your sidebar.', 'basic-delux' ),
			'before_widget' => '<li id="%1$s" class="widget %2$s">',
			'after_widget'  => '</li>',
			'before_title'  => '<p class="wtitle">',
			'after_title'   => '</p>',
		) );

	}
endif;
add_action( 'widgets_init', 'basic_widgets_init' );


/* ==========================================================================
 *  Add Open Graph meta for singular pages
 * ========================================================================== */
if ( ! function_exists( 'basic_add_social' ) ) :
	function basic_add_social( $content ) {
		global $post;

		if ( is_singular() && basic_get_theme_option( 'add_social_meta' ) ) {

			$aiod  = get_post_meta( $post->ID, '_aioseop_description', true );
			$descr = ( isset( $aiod ) ) ? esc_html( $aiod ) : $post->post_excerpt;

			$title    = get_the_title();
			$url      = get_the_permalink();
			$blogname = get_bloginfo( 'name' );
			$img      = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'thumbnail', false );

			echo <<<EOT
		
<!-- BEGIN social meta -->
<meta property="og:type" content="article"/>
<meta property="og:title" content="$title"/>
<meta property="og:description" content="$descr" />
<meta property="og:image" content="$img[0]"/>
<meta property="og:url" content="$url"/>
<meta property="og:site_name" content="$blogname"/>
<link rel="image_src" href="$img[0]" />
<!-- END social meta -->


EOT;
		}
	}
endif;
add_action( 'wp_head', 'basic_add_social' );
/* ========================================================================== */


/* ========================================================================== *
 * default COMMENT callback
 * ========================================================================== */
if ( ! function_exists( 'basic_html5_comment' ) ) :
	function basic_html5_comment( $comment, $args, $depth ) {

		$tag = ( 'div' === $args['style'] ) ? 'div' : 'li';
		?>
		<<?php echo $tag; ?> id="comment-<?php comment_ID(); ?>" <?php comment_class( empty( $args['has_children'] ) ? '' : 'parent' ); ?>>
		<div id="div-comment-<?php comment_ID(); ?>" class="comment-body">

			<footer class="comment-meta">
				<div class="comment-author">
					<?php if ( 0 != $args['avatar_size'] ) {
						echo get_avatar( $comment, $args['avatar_size'] );
					} ?>
					<b class="fn"><?php comment_author_link(); ?></b>
				</div>

				<div class="comment-metadata">
					<a href="<?php echo esc_url( get_comment_link( $comment->comment_ID, $args ) ); ?>">
						<time datetime="<?php comment_time( 'c' ); ?>">
							<?php printf( __( '%1$s at %2$s', 'basic-delux' ), get_comment_date(), get_comment_time() ); ?>
						</time>
					</a>
					<?php edit_comment_link( __( 'Edit', 'basic-delux' ), '<span class="edit-link">', '</span>' ); ?>
				</div>

				<?php if ( '0' == $comment->comment_approved ) : ?>
					<p class="comment-awaiting-moderation"><?php _e( 'Your comment is awaiting moderation.', 'basic-delux' ); ?></p>
				<?php endif; ?>
			</footer>

			<?php $comment_unique_id = wp_unique_id( 'comment-content-' ); ?>
			<div id="<?php echo esc_attr( $comment_unique_id ); ?>" class="comment-content collapse">
				<?php comment_text(); ?>
				<a class="d-none collapsed comment-collapse-link" data-toggle="collapse" href="#<?php echo esc_attr( $comment_unique_id ); ?>" role="button" aria-expanded="false" aria-controls="comment-content"></a>
			</div>

			<div class="reply">
				<?php comment_reply_link( array_merge( $args, array(
						'add_below' => 'div-comment',
						'depth'     => $depth,
						'max_depth' => $args['max_depth']
					)
				) ); ?>
			</div>

		</div>

		<?php

	}
endif;
/* ========================================================================== */


/* ==========================================================================
 *  Include libs
 * ========================================================================== */

// functions what display some page parts
require_once( get_template_directory() . '/inc/html-blocks.php' );

// layout functions and filters
require_once( get_template_directory() . '/inc/layout.php' );

// hooks
require_once( get_template_directory() . '/inc/hooks.php' );
require_once( get_template_directory() . '/inc/woo-hooks.php' );

// Schema.org markup
require_once( get_template_directory() . '/inc/schemaorg.php' );

// theme options with Customizer API
require_once( get_template_directory() . '/inc/admin/options.php' );
require_once( get_template_directory() . '/inc/customizer/customizer-controls.php' );
require_once( get_template_directory() . '/inc/customizer/customizer-settings.php' );
require_once( get_template_directory() . '/inc/customizer/customizer.php' );


if ( is_admin() ) :

	// meta-box for layout control
	require_once( get_template_directory() . '/inc/admin/meta-boxes.php' );

endif;

/*
 * Include other functions
 */
require_once( get_template_directory() . '/inc/breadcrumbs.php' );
require_once( get_template_directory() . '/inc/rus_to_lat.php' );
require_once( get_template_directory() . '/inc/htmloptimize.php' ); 
require_once( get_template_directory() . '/inc/head_to_footer.php' );
require_once( get_template_directory() . '/inc/related-post.php' );
require_once( get_template_directory() . '/inc/sendmail.php' );
require_once( get_template_directory() . '/inc/nonspam.php' ); 
require_once( get_template_directory() . '/inc/urlspan/urlspan.php' );
require_once( get_template_directory() . '/inc/show_images_in_excerpt.php' );

add_filter('get_custom_logo','change_logo_class');


function change_logo_class($html)
{
	$html = str_replace('itemprop="logo"', '', $html);
	return $html;
}

/**
 * A callback function to add an HTML tags <p> to 'the_excerpt' function.
 * 
 * @param string $post_excerpt The post excerpt.
 * @return string Post excerpt with paragraphs.
 */
function the_excerpt_paragraph( $post_excerpt ) {
	if ( get_theme_mod( 'the_excerpt_paragraph' ) && ! get_theme_mod( 'show_images_in_excerpt' ) ) {
		$post_excerpt = get_the_content();
		$post_excerpt = wpautop( $post_excerpt );
		$post_excerpt = htmlentities2( $post_excerpt );
		$post_excerpt = wp_trim_words( $post_excerpt, 55, '&nbsp;&hellip;' );
		$post_excerpt = wp_specialchars_decode( $post_excerpt );
		$post_excerpt = force_balance_tags( $post_excerpt );
		$post_excerpt = strip_tags( $post_excerpt, '<p>' );
	}

	return $post_excerpt;
}
add_action( 'the_excerpt', 'the_excerpt_paragraph' );

/**
 * A function to add the Top Navigation.
 * 
 * @return string Menu HTML.
 */
function get_the_top_navigation() {
	$output  = do_action( 'basic_before_topnav' );
	$output .= '<div class="' . apply_filters( 'basic_header_topnav_class', 'topnav grid' ) . '">';
	$output .= '<div id="mobile-menu" class="mm-active">';
	$output .= __( 'Menu', 'basic-delux' );
	$output .= '</div>';
	$output .= '<nav>';

	if ( has_nav_menu( 'top' ) ) {
		$output .= wp_nav_menu(
			array(
				'theme_location' => 'top',
				'menu_id'        => 'navpages',
				'items_wrap'     => '<ul class="top-menu maxwidth clearfix">%3$s</ul>',
				'container'      => false,
				'echo'           => false,
			)
		);
	} else {
		$output .= '<ul class="top-menu maxwidth clearfix">';

		if ( is_front_page() ) {
			$output .= '<li class="page_item current_page_item"><span>' . __( 'Home', 'basic-delux' ) . '</span></li>';
		} else {
			$output .= '<li class="page_item"><a href="' . esc_url( home_url( '/' ) ) . '">' . __( 'Home', 'basic-delux' ) . '</a></li>';
		}

		$output .= wp_list_pages(
			array(
				'title_li' => '',
				'depth'    => 2,
				'echo'     => false,
			)
		);
		$output .= '</ul>';
	}

	$output .= '</nav>';
	$output .= '</div>';
	$output .= do_action( 'basic_after_topnav' );

	return $output;
}

/**
 * Enqueue scripts and styles.
 */
function nb_scripts() {
	// Styles.
	wp_enqueue_style( 'dashicons' );
	wp_enqueue_style( 'wpshop-core-font-style', get_template_directory_uri() . '/assets/fonts/wpshop-core/style.css', array(), wp_get_theme()->get( 'Version' ) );
	wp_enqueue_style( 'bootstrap-iso-style', get_template_directory_uri() . '/assets/css/bs-iso.min.css', array(), '4.3.1' );

	// Scripts.
	wp_enqueue_script( 'bootstrap-script', get_template_directory_uri() . '/assets/js/bootstrap.min.js', array( 'jquery' ), '4.3.1', true );
}
add_action( 'wp_enqueue_scripts', 'nb_scripts' );

/**
 * Enqueue TinyMCE plugin script with its ID.
 * 
 * @param  array $plugins An array of default TinyMCE plugins.
 * @return array          An array of default TinyMCE plugins.
 */
function nb_enqueue_plugin_scripts( $plugins ) {
	$plugins['blockquote_button_plugin'] =  get_template_directory_uri() . '/assets/js/tinymce-plugin.js';

	return $plugins;
}
add_filter( 'mce_external_plugins', 'nb_enqueue_plugin_scripts' );

/**
 * Register buttons with their id.
 * 
 * @param  array $buttons Third-row list of buttons.
 * @return array          Third-row list of buttons.
 */
function nb_register_buttons_editor( $buttons ) {
	array_push(
		$buttons,
		'blockquote_warning',
		'blockquote_question',
		'blockquote_danger',
		'blockquote_check',
		'blockquote_info',
		'blockquote_thumbs_up',
		'blockquote_thumbs_down',
		'blockquote_quote'
	);

	return $buttons;
}
add_filter( 'mce_buttons_3', 'nb_register_buttons_editor' );

// Функция для изменения email адреса
//function devise_sender_email( $original_email_address )
//{
//    return 'info@ 4pole.ru';
//}

// Цепляем наши функции на фильтры WordPress

    add_filter( 'wp_mail_from', 'devise_sender_email' );

function change_email($email) {
    return 'info@ 4pole.ru';
}

add_filter('wp_mail_from','change_email');
// Виджет в headerif (function_exists('register_sidebar')){   register_sidebar( array(        'name'          => 'Виджет в header', //название виджета в админ-панели        'id'            => 'sidebar-header', //идентификатор виджета        'description'   => 'виден на всех страницах', //описание виджета в админ-панели        'before_widget' => '<aside id="%1$s" class="widget %2$s">', //открывающий тег виджета с динамичным идентификатором        'after_widget'  => '<div class="clear"></div></aside>', //закрывающий тег виджета с очищающим блоком        ) );}

