
var fs = require('fs');

var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
ws1.write('ʹ��Streamд���ı�����...\n');
ws1.write('END.');
ws1.end();

var ws2 = fs.createWriteStream('output2.txt');
ws2.write(new Buffer('ʹ��Streamд�����������...\n', 'utf-8'));
ws2.write(new Buffer('END.', 'utf-8'));
ws2.end();