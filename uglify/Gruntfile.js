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
		},
		uglify: {
			build: {
				src: 'build/js/build.js',
				dest: 'build/js/build.min.js'
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['concat', 'uglify']);
};
