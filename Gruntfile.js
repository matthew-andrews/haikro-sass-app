module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			'public/main.css': 'main.scss'
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['sass']);
};
