module.exports = {
  name: 'platform-common',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/platform/common',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
