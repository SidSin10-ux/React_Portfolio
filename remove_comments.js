const fs = require('fs');
const path = require('path');

function removeComments(source) {
    // Removes multi-line comments /* ... */
    // Removes single-line comments // ... avoiding http:// and https://
    return source.replace(/\/\*[\s\S]*?\*\/|(?<=[^:])\/\/.*|^\/\/.*/g, "");
}

function processDirectory(directory) {
    if (!fs.existsSync(directory)) return;

    const files = fs.readdirSync(directory);

    for (const file of files) {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx') || fullPath.endsWith('.css')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const newContent = removeComments(content);
            // Clean up multiple empty lines that might result from comment removal
            const cleaned = newContent.replace(/^\s*[\r\n]/gm, "");
            fs.writeFileSync(fullPath, cleaned, 'utf8');
        }
    }
}

try {
    processDirectory(path.join(__dirname, 'src'));
    if (fs.existsSync(path.join(__dirname, 'server'))) {
        processDirectory(path.join(__dirname, 'server'));
    }
    console.log("Comments removed.");
} catch (err) {
    console.error(err);
}
