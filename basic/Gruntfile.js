/*global module:false*/
module.exports = function (grunt) {
	grunt.initConfig({
		compass : {
			dist: {
				options: {
					sassDir: "source/scss",
					cssDir: "build/css"
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.registerTask('default', ['compass']);
};
