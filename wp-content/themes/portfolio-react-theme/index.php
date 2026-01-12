<?php
/**
 * The main template file
 * 
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * 
 * @package Portfolio_React_Theme
 */

get_header();
?>

<main id="primary" class="site-main">
    <!-- React will mount here -->
    <div id="root"></div>
    
    <!-- Fallback content if JavaScript is disabled -->
    <noscript>
        <div class="no-js-message">
            <h1><?php bloginfo('name'); ?></h1>
            <p><?php bloginfo('description'); ?></p>
            <p>This site requires JavaScript to be enabled for the best experience.</p>
        </div>
    </noscript>
</main>

<?php
get_footer();
