import shelljs from 'shelljs';

shelljs
    .find('src/components')
    .filter((file) => file.match(/\.test.jsx$/))
    .forEach((file) => {
        const newName = file.replace(/\.jsx$/, '.js');
        shelljs.mv(file, newName);
    });
