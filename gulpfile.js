var electron = require('electron-connect').server.create();
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var webpack = require("webpack");


gulp.task("electron", function() {
    electron.start();
    gulp.watch(['./*.js'], electron.restart);
    gulp.watch(['./*.{html,js,css}'], electron.reload);
});

