const path = require('path');

const getRelativePaths = absolutePaths => {
  const cwd = process.cwd();
  const relativePaths = absolutePaths.map(file => path.relative(cwd, file));
  return relativePaths.join(' ');
};

module.exports = {
  // TODO run ng lint only on staged files by using --files flag
  '*.{ts,html}': () => 'ng lint',
  '*.scss': absolutePaths => `stylelint ${absolutePaths}`,
};
