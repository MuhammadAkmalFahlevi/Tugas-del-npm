const del = require('del');
 
(async () => {
    const deletedPaths = await del(['temp/*.js', '!temp/unicorn.js']);
 
    console.log('Deleted files and directories:\n', deletedPaths.join('\n'));
})();