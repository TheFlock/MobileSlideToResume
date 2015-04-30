<!doctype html>
<!--[if lt IE 9]><html class="lt-ie9" itemscope itemtype="http://schema.org/Movie"><![endif]-->
<!--[if IE 9]><html class="ie" itemscope itemtype="http://schema.org/Movie"><![endif]-->
<!--[if gt IE 9]><!--><html itemscope itemtype="http://schema.org/Movie"><!--<![endif]-->

    <head>   
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        
        <meta property="og:title" content=""/>
        <meta property="og:description" content=""/>
        <meta property="og:site_name" content=""/>
        <meta itemprop="name" content="" />
        <title>Mobile Slide To Unlock</title>
        
        <meta id="viewport" name="viewport" content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1">
        
        <script>

            var env = 'dev'; // set to 'prod' to turn off console logs

            function parsePath(){
                var base = window.location.protocol+"//"+window.location.host;
                if(window.location.port && window.location.port != '')path += ':'+window.location.port;

                var path = window.location.pathname;
                if(path.indexOf('.') >= 0) path = path.substring(0, path.lastIndexOf('/')+1);
                else if (path.indexOf('?') >= 0) path = path.substring(0, path.lastIndexOf('?'));

                return base + path;
            }

            window.FLOCK = window.FLOCK || {};
            FLOCK.settings = FLOCK.settings || {};
            FLOCK.settings.base_path = parsePath();
            FLOCK.settings.base_url = '';
            FLOCK.settings.deeplink = '<?php echo $deeplink; ?>';
            FLOCK.settings.mode = '<?php if ( isset( $_GET["mode"] ) ) echo $_GET["mode"] ?>';
            FLOCK.settings.instaLoad = '<?php echo $instaload ?>';

        </script>

        <link rel="stylesheet" href="css/main.css">
        
        <!-- build:js js/modernizr.js -->
        <script src="bower_components/modernizr/modernizr.js"></script>   
        <!-- /build -->
        
    </head>
    <!-- build:[class]:dist prod -->
    <body class="dev">
    <!-- /build -->
        <script>
        if (document.body.className.match('prod')) {
            env = 'prod';
        }
        </script>
        
        <div id="shell">
            <div id="regularLabel">GOOD TO GO</div>
        </div>
        
        <div id="slideToUnlock">
            <div class="slideToUnlockLabel">SLIDE TO UNLOCK</div>
        </div>
        
        
        <script src="http://js.pusher.com/2.0/pusher.min.js" type="text/javascript"></script>
        
        <!-- build:js js/main.js -->
        <script data-main="js/main" src="bower_components/requirejs/require.js"></script>
        <!-- /build -->
        
    </body>
</html>