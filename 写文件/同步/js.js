'use strict';

var fs = require('fs');

fs.stat('output.js', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // �Ƿ����ļ�:
        console.log('isFile: ' + stat.isFile());
        // �Ƿ���Ŀ¼:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // �ļ���С:
            console.log('size: ' + stat.size);
            // ����ʱ��, Date����:
            console.log('birth time: ' + stat.birthtime);
            // �޸�ʱ��, Date����:
            console.log('modified time: ' + stat.mtime);
        }
    }
});
