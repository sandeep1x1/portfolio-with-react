<?php
/**
 * Portfolio React Theme Functions
 * 
 * @package Portfolio_React_Theme
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function portfolio_react_theme_setup() {
    // Add default posts and comments RSS feed links to head
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails
    add_theme_support('post-thumbnails');

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'portfolio-react-theme'),
        'footer'  => __('Footer Menu', 'portfolio-react-theme'),
    ));

    // Switch default core markup to output valid HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Add theme support for custom logo
    add_theme_support('custom-logo', array(
        'height'      => 250,
        'width'       => 250,
        'flex-width'  => true,
        'flex-height' => true,
    ));

    // Add support for responsive embeds
    add_theme_support('responsive-embeds');
}
add_action('after_setup_theme', 'portfolio_react_theme_setup');

/**
 * Enqueue scripts and styles
 */
function portfolio_react_theme_enqueue_assets() {
    $theme_version = wp_get_theme()->get('Version');
    
    // Enqueue main stylesheet (Tailwind CSS compiled)
    wp_enqueue_style(
        'portfolio-react-theme-styles',
        get_template_directory_uri() . '/dist/assets/index.css',
        array(),
        $theme_version
    );

    // Enqueue React app bundle
    wp_enqueue_script(
        'portfolio-react-theme-app',
        get_template_directory_uri() . '/dist/assets/index.js',
        array(),
        $theme_version,
        true // Load in footer
    );

    // Pass WordPress data to React
    wp_localize_script('portfolio-react-theme-app', 'wpData', array(
        'siteUrl'     => get_site_url(),
        'themePath'   => get_template_directory_uri(),
        'ajaxUrl'     => admin_url('admin-ajax.php'),
        'nonce'       => wp_create_nonce('wp_rest'),
        'restUrl'     => rest_url(),
        'siteName'    => get_bloginfo('name'),
        'description' => get_bloginfo('description'),
    ));

    // Enqueue comment reply script
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'portfolio_react_theme_enqueue_assets');

/**
 * Register widget areas
 */
function portfolio_react_theme_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar', 'portfolio-react-theme'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here to appear in your sidebar.', 'portfolio-react-theme'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));

    register_sidebar(array(
        'name'          => __('Footer', 'portfolio-react-theme'),
        'id'            => 'footer-1',
        'description'   => __('Add widgets here to appear in your footer.', 'portfolio-react-theme'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
}
add_action('widgets_init', 'portfolio_react_theme_widgets_init');

/**
 * Custom REST API endpoint example
 * This allows React to fetch custom data
 */
function portfolio_react_theme_register_api_routes() {
    register_rest_route('portfolio/v1', '/theme-data', array(
        'methods'  => 'GET',
        'callback' => 'portfolio_react_theme_get_theme_data',
        'permission_callback' => '__return_true',
    ));
}
add_action('rest_api_init', 'portfolio_react_theme_register_api_routes');

function portfolio_react_theme_get_theme_data() {
    return array(
        'message' => 'Hello from WordPress REST API!',
        'theme'   => 'Portfolio React Theme',
        'version' => wp_get_theme()->get('Version'),
    );
}
