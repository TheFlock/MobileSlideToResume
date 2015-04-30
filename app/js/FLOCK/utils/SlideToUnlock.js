// UMD (Universal Module Definition) patterns for JavaScript modules that work everywhere.
// https://github.com/umdjs/umd/blob/master/amdWebGlobal.js

;(function (root, factory) {
    // Browser globals
    root.utils = root.utils || {};

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([
                'jquery'
            ], function () {
            return (root.utils.SlideToUnlock = factory());
        });
    } else {
        root.utils.SlideToUnlock = factory();
    }
}(window.FLOCK = window.FLOCK || {}, function () {

    'use strict';
        
    var SlideToUnlock = function (elem) {
        this.elem = elem;
        this.body = $(document.body);
        this.hide();
        
        window.onresize = resize.bind(this);
        window.onorientationchange = resize.bind(this);
        resize.call(this);
        
        // this.body.on('touchend', resize.bind(this));
    }
    
    function show(){
        console.log('show');
        this.visible = true;

        this.body.css('overflow', 'scroll');
        this.body.css('position', 'static');

        this.elem.style.display = "block";
    }
    
    function hide(){
        console.log('hide');
        this.visible = false; 

        this.body.css('height', window.innerHeight);
        this.body.css('overflow', 'hidden');
        this.body.css('position', 'fixed');
        this.body[0].scrollTop = 0;
 
        this.elem.style.display = "none";  
    }
    
    function resize(){
        var availHeight = window.innerHeight,
            screenHeight = (window.innerWidth>window.innerHeight)?window.screen.width:window.screen.height,
            availScreenHeight = (window.innerWidth>window.innerHeight)?window.screen.availWidth:window.screen.availHeight,
            diff = screenHeight-availHeight;
        
        var viewport = document.getElementById('viewport'),
            viewport_content = viewport.getAttribute('content');

        if (window.innerWidth > window.innerHeight) {
            viewport_content = 'height=device-width,' + viewport_content.replace(/height=device-height,|height=device-width,/, '');
        } else {
            viewport_content = 'height=device-height,' + viewport_content.replace(/height=device-height,|height=device-width,/, '');
        }
        viewport.setAttribute('content', viewport_content);

        var showSlide = (diff > 50)?true:false;
        
        if(showSlide){
            this.show();
        } else if(!showSlide){
            this.hide();
        }
        
        console.log(availHeight+' vs: '+screenHeight);
    }
    
    SlideToUnlock.prototype.show = show;
    SlideToUnlock.prototype.hide = hide;
    
    return SlideToUnlock;
}));