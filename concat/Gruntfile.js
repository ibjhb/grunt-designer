/*global module:false*/
module.exports = function (grunt) {
	grunt.initConfig({
		concat : {
			dist: {
				src: [
					'source/js/*.js'
				],
				dest : 'build/js/build.js'
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
};
