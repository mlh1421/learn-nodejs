'use strict';

var path = require('path');

// ������ǰĿ¼:
var workDir = path.resolve('.'); // '/Users/michael'
console.log(workDir);

// ����������ļ�·��:��ǰĿ¼+'pub'+'index.html':
var filePath = path.join(workDir, 'pub', 'index.html');
// '/Users/michael/pub/index.html'
console.log(filePath);
