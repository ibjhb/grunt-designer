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
		concat : {
			dist: {
				src: [
					'source/js/*.js'
				],
				dest : 'build/js/build.js'
			}
		},
		imagemin : {
			dynamic : {
				files: [{
					expand: true,
					cwd: 'source/images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'build/images/'
				}]
			}
		},
		uglify: {
			build: {
				src: 'build/js/build.js',
				dest: 'build/js/build.min.js'
			}
		},
		watch : {
			options : {
				livereload : true
			},
			files : [
				'source/scss/*.scss',
				'source/images/*.*',
				'source/js/*.js'
			],
			tasks : ['compass', 'concat', 'uglify', 'imagemin']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
};
