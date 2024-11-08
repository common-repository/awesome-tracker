<?php
/**
 *
 * @link              https://www.hintcoding.com
 * @since             1.0.0
 * @package           awesome-tracker
 *
 * @wordpress-plugin
 * Plugin Name:       Awesome Tracker
 * Plugin URI:        http://www.hintcoding.com
 * Description:       Keep track of users behaviours
 * Version:           1.1.0
 * Author:            HintCoding
 * Author URI:        http://www.hintcoding.com
 * License:           GPL-3.0+
 * License URI:       http://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain:       awesome-tracker-td
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if (!defined('WPINC'))
    die;

define('AWESOME_TRACKER_VERSION', '1.1.0');


require_once plugin_dir_path(__FILE__) . 'inc/init/class-at-requires.php';


AwesomeTracker::init();


Class AwesomeTracker {

    /**
     * Plugin directory, set in constructor.
     *
     * @access public
     * @var string
     */
    public static $plugin_dir;

    /**
     * Plugin url, set in constructor.
     *
     * @access public
     * @var string
     */
    public static $plugin_url;

    /**
     * Name for the Visits DB Table
     */
    const TBL_VISITS = 'awesome_tracker_visits';


    /**
     * Load required files and initialice plugin vars
     */
    public static function init() {

        self::$plugin_dir = plugin_dir_path(__FILE__);
        self::$plugin_url = plugins_url('', __FILE__);

        AwesomeTrackerRequires::load();

        register_activation_hook(__FILE__, 'AwesomeTracker::activate');
        register_uninstall_hook(__FILE__, 'AwesomeTracker::uninstall');

        AwesomeTrackerHooks::add_actions();
        AwesomeTrackerHooks::add_filters();

        add_action( 'plugins_loaded', 'AwesomeTracker::update');

    }

    public static function activate() {

        AwesomeTrackerActivator::create_tables();

        AwesomeTrackerActivator::register_cron();

        update_option('awesome_tracker_version', AWESOME_TRACKER_VERSION);

    }

    public static function uninstall() {

        AwesomeTrackerActivator::uninstall();

    }

    public static function update(){
        if ( get_option( 'awesome_tracker_version' ) == AWESOME_TRACKER_VERSION)
            return null;

        self::activate();

        if(AWESOME_TRACKER_VERSION === '1.1.0'){
            $oldRoutes = get_option('at_routes',array());
            if(!empty($oldRoutes)){
                $newRoutes = get_option(AwesomeTracker_Route::KEY_OPTION);
                if(empty($newRoutes)){
                    update_option(AwesomeTracker_Route::KEY_OPTION,$oldRoutes);
                }
            }
        }
    }

    public static function load_textdomain() {
        load_plugin_textdomain( 'awesome-tracker-td', FALSE, basename(self::$plugin_dir) . '/languages/' );
    }

}
