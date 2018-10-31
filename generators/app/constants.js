const chalk = require('chalk');

module.exports.KICKOFF_MESSAGE = `${chalk.cyan('\n        ║║║            ║║║       ') +
  chalk.cyan('\n       ║    ║║║    ║║║    ║      ') +
  chalk.cyan('\n       ║       ║║║║       ║       ') +
  chalk.cyan('\n        ║    ║║ ║║ ║║    ║           ') +
  chalk.cyan('\n        ║║║ ║║║║  ║║║║ ║║║        ') +
  chalk.cyan('\n     ║║║ ║ ║          ║ ║ ║║║          ') +
  chalk.blue('██╗  ██╗██╗ ██████╗██╗  ██╗ ') +
  chalk.white('██████╗ ███████╗███████╗') +
  chalk.cyan('\n   ║║    ║║║   ║║║║   ║║║    ║║        ') +
  chalk.blue('██║ ██╔╝██║██╔════╝██║ ██╔╝') +
  chalk.white('██╔═══██╗██╔════╝██╔════╝') +
  chalk.cyan('\n  ║       ║   ║║║║║║   ║       ║       ') +
  chalk.blue('█████╔╝ ██║██║     █████╔╝ ') +
  chalk.white('██║   ██║█████╗  █████╗') +
  chalk.cyan('\n   ║║    ║║║   ║║║║   ║║║    ║║        ') +
  chalk.blue('██╔═██╗ ██║██║     ██╔═██╗ ') +
  chalk.white('██║   ██║██╔══╝  ██╔══╝') +
  chalk.cyan('\n     ║║║ ║ ║          ║ ║ ║║║          ') +
  chalk.blue('██║  ██╗██║╚██████╗██║  ██╗') +
  chalk.white('╚██████╔╝██║     ██║') +
  chalk.cyan('\n        ║║║ ║║║║  ║║║║ ║║║             ') +
  chalk.blue('╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝ ') +
  chalk.white('╚═════╝ ╚═╝     ╚═╝') +
  chalk.cyan('\n        ║    ║║ ║║ ║║    ║         ') +
  chalk.cyan('\n       ║       ║║║║       ║          ') +
  chalk.cyan('\n       ║    ║║║    ║║║    ║        ') +
  chalk.cyan('\n        ║║║            ║║║      ')}\n\n  ${chalk.blue.bold(
  'Welcome to the React kickoff'
)}\n\n  `;

module.exports.LINTER_PATH = {
  src: 'eslintrc.js',
  destination: '.eslintrc.js'
};

module.exports.LINTER_IGNORE_PATH = {
  src: 'eslintignore',
  destination: '.eslintignore'
};

module.exports.FLOWCONFIG_PATH = {
  src: 'flowconfig',
  destination: '.flowconfig'
};

const COMPONENTS_PATH = 'src/app/components';
const SCREENS_PATH = 'src/app/screens';
const CONFIG_PATH = 'src/config';
const REDUX_PATH = 'src/redux';
const UTILS_PATH = 'src/utils';
const SERVICES_PATH = 'src/services';
const CONSTANTS_PATH = 'src/constants';
const SCSS_PATH = 'src/scss';
const STORYBOOK_CONFIG_PATH = '.storybook/';
const STORIES_PATH = 'stories/';
const CI_PATH = '.woloxci/';

module.exports.REDUX_COMPONENTS = [`${COMPONENTS_PATH}/Field/index.js`];

module.exports.TEMPLATE_FILES = [
  'config-overrides.js',
  'pull_request_template.md',
  'circle.yml',
  'src/index.js',
  'src/app/index.js',
  'Jenkinsfile',
  `${CONFIG_PATH}/api.js`,
  `${CONFIG_PATH}/i18n.js`,
  REDUX_PATH,
  `${REDUX_PATH}/store.js`,
  `${REDUX_PATH}/Auth/actions.js`,
  `${REDUX_PATH}/Auth/reducer.js`,
  SERVICES_PATH,
  `${SERVICES_PATH}/AuthServices.js`,
  `${SERVICES_PATH}/LocalStorageService.js`,
  `${SERVICES_PATH}/AnalyticsService.js`,
  SCSS_PATH,
  `${SCSS_PATH}/application.scss`,
  `${SCSS_PATH}/components.scss`,
  `${SCSS_PATH}/layout.scss`,
  `${SCSS_PATH}/margins.scss`,
  UTILS_PATH,
  `${UTILS_PATH}/colors.js`,
  `${UTILS_PATH}/array.js`,
  `${SCREENS_PATH}/Dashboard/screens/Home/index.js`,
  `${SCREENS_PATH}/Dashboard/index.js`,
  `${COMPONENTS_PATH}/Routes/components/AuthenticatedRoute.js`,
  `${COMPONENTS_PATH}/Routes/constants.js`,
  `${COMPONENTS_PATH}/Routes/index.js`,
  `${COMPONENTS_PATH}/Spinner/index.js`,
  `${COMPONENTS_PATH}/Spinner/components/loading.js`,
  `${COMPONENTS_PATH}/Spinner/components/constants.js`,
  `${COMPONENTS_PATH}/Routes/styles.scss`,
  `${COMPONENTS_PATH}/SearchBar/index.js`,
  `${COMPONENTS_PATH}/TextArea/index.js`,
  `${COMPONENTS_PATH}/TextArea/styles.scss`,
  `${COMPONENTS_PATH}/Checkbox/index.js`,
  `${COMPONENTS_PATH}/Checkbox/layout.js`,
  `${CONSTANTS_PATH}/fonts.js`,
  `${CONSTANTS_PATH}/sizes.js`,
  `${STORYBOOK_CONFIG_PATH}/config.js`,
  `${STORYBOOK_CONFIG_PATH}/webpack.config.js`,
  `${STORIES_PATH}/components.js`,
  `${STORIES_PATH}/styles.scss`,
  `${CI_PATH}/Dockerfile`
];

module.exports.LOCAL_STORAGE_FILE = `${SERVICES_PATH}/LocalStorageService.js`;

module.exports.CI_CONFIG_FILE = `${CI_PATH}/config.yml`;

module.exports.OPTIONAL_DEPENDENCIES = {
  apisauce: { dependencies: ['apisauce'] },
  'babel-module-resolver': {
    dependencies: ['babel-plugin-module-resolver'],
    devDependencies: ['eslint-import-resolver-babel-module']
  },
  jest: { dependencies: ['jest'] },
  moment: { dependencies: ['moment'] },
  'seamless-immutable': { dependencies: ['seamless-immutable'] },
  flow: {
    dependencies: ['@babel/cli'],
    devDependencies: ['flow-bin', '@babel/preset-flow']
  },
  reselect: { dependencies: ['reselect'] }
};