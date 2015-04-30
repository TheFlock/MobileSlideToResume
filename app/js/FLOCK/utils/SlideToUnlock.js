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
        this.body.removeClass('fill');
        // this.elem.style.visibility = "visible";
        this.elem.style.display = "block";
    }
    
    function hide(){
        console.log('hide');
        this.visible = false; 
        //this.body.addClass('fill');
        this.body.css('height', (window.innerWidth>window.innerHeight)?window.screen.width:window.screen.height);
        this.body[0].scrollTop = 0;

        console.log(window.screen, window);

        // this.elem.style.visibility = "hidden";  
        this.elem.style.display = "none";  
    }
    
    function resize(){
        var availHeight = window.innerHeight,
            screenHeight = (window.innerWidth>window.innerHeight)?window.screen.width:window.screen.height,
            diff = screenHeight-availHeight;
        
        var viewport = document.getElementById('viewport'),
            viewport_content = viewport.getAttribute('content');

        if (window.innerWidth > window.innerHeight) {
            viewport_content = 'height=device-width,' + viewport_content.replace(/height=device-height,|height=device-width,/, '');
        } else {
            viewport_content = 'height=device-height,' + viewport_content.replace(/height=device-height,|height=device-width,/, '');
        }
        viewport.setAttribute('content', viewport_content);

        this.elem.style.height = screenHeight+"px";
        
        var showSlide = (diff > 50)?true:false;
        
        if(showSlide && !this.visible){
            this.show();
        } else if(!showSlide && this.visible){
            this.hide();
        }
        
        console.log(availHeight+' vs: '+screenHeight);
    }
    
    SlideToUnlock.prototype.show = show;
    SlideToUnlock.prototype.hide = hide;
    
    return SlideToUnlock;
}));