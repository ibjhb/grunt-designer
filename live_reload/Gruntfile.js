/*global module:false*/
module.exports = function (grunt) {
	grunt.initConfig({
		compass : {
			dist: {
				options: {
					sassDir: 'source/scss',
					cssDir: 'build/css'
				}
			}
		},
		watch : {
			options : {
				livereload : true
			},
			files : ['source/scss/*.scss'],
			tasks : ['compass']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
};
