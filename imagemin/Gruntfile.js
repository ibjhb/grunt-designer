/*global module:false*/
module.exports = function (grunt) {
	grunt.initConfig({
		imagemin : {
			dynamic : {
				files: [{
					expand: true,
					cwd: 'source/images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'build/images/'
				}]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-imagemin');
};
