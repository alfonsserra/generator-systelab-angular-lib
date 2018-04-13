var Generator = require('yeoman-generator');

module.exports = class extends Generator {

	constructor(args, options) {
		super(args, options);
	}

	prompting() {
		return this.prompt([{
			type: 'input',
			name: 'account',
			message: 'Your github account name',
			default: 'systelab'
		},{
			type: 'input',
			name: 'name',
			message: 'Your library name',
			//Defaults to the project's folder name if the input is skipped
			default: this.appname
		}, {
			type    : 'confirm',
			name    : 'travis',
			message : 'Would you like to include a Travis script?'
		}]).then((answers)=> {
			this.props = answers;
			this.log('Summary:');

		this.log('   Project name: '+answers.account+'/'+answers.name);
			if (answers.travis) {
				this.log('   Include Travis script');
			}
		});
	}

	writing() {
		this.log('Creating files:');
		this.fs.copyTpl(
			this.templatePath('_angular-cli.json'),
			this.destinationPath('.angular-cli.json'),
			{ 	title: this.props.name});
		this.fs.copy(
			this.templatePath('_gitignore'),
			this.destinationPath('.gitignore'));
		this.fs.copyTpl(
			this.templatePath('_gulpfile.js'),
			this.destinationPath('gulpfile.js'),
			{ 	title: this.props.name,
				account: this.props.account});
		this.fs.copy(
			this.templatePath('_karma.conf.js'),
			this.destinationPath('karma.conf.js'));
		this.fs.copy(
			this.templatePath('_LICENSE'),
			this.destinationPath('LICENSE'));
		this.fs.copyTpl(
			this.templatePath('_package.json'),
			this.destinationPath('package.json'),
			{ 	title: this.props.name,
				account: this.props.account});
		this.fs.copyTpl(
			this.templatePath('_README.md'),
			this.destinationPath('README.md'),
			{ 	title: this.props.name,
				account: this.props.account});
		this.fs.copy(
			this.templatePath('_tsconfig.json'),
			this.destinationPath('tsconfig.json'));
		this.fs.copy(
			this.templatePath('_tsconfig.lib.json'),
			this.destinationPath('tsconfig.json'));
		this.fs.copy(
			this.templatePath('_tslint.json'),
			this.destinationPath('tslint.json'));
		if (this.props.travis) {
			this.fs.copyTpl(
				this.templatePath('_travis.yml'),
				this.destinationPath('.travis.yml'),
				{ 	title: this.props.name,
					e2e: this.props.account});
		}

		this.fs.copy(
			this.templatePath('src/*.ico'),
			this.destinationPath('src'));
		this.fs.copy(
			this.templatePath('src/*.html'),
			this.destinationPath('src'));
		this.fs.copy(
			this.templatePath('src/*.ts'),
			this.destinationPath('src'));
		this.fs.copy(
			this.templatePath('src/*.json'),
			this.destinationPath('src'));
		this.fs.copy(
			this.templatePath('src/*.css'),
			this.destinationPath('src'));
		this.fs.copy(
			this.templatePath('src/environments'),
			this.destinationPath('src/environments'));
		this.fs.copyTpl(
			this.templatePath('src/test/_sample.service.spec.ts'),
			this.destinationPath('src/test/sample.service.spec.ts'),
			{ 	title: this.props.name,
				e2e: this.props.account});

		this.fs.copy(
			this.templatePath('src/app/app.component.*'),
			this.destinationPath('src/app'));
		this.fs.copyTpl(
			this.templatePath('src/app/_app.module.ts'),
			this.destinationPath('src/app/app.module.ts'),
			{ 	title: this.props.name,
				e2e: this.props.account});

		this.fs.copy(
			this.templatePath('src/app/folder/sample.service.ts'),
			this.destinationPath('src/app/'+this.props.name+'/sample.service.ts'));

		this.fs.copyTpl(
			this.templatePath('src/app/folder/_library.module.ts'),
			this.destinationPath('src/app/'+this.props.name+'/'+this.props.name+'.module.ts'),
			{ 	title: this.props.name,
				e2e: this.props.account});
	}

	install() {
		this.npmInstall();
	}

	end() {
		this.log('Thanks for using systelab-angular-lib generator.');
	}
};
