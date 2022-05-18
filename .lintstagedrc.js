module.exports = {
  '*.ts?(x)': () => 'tsc',
  '*.(ts|js)?(x)': (filenames) => `eslint ${filenames.join(' ')}`,
}
