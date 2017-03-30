var fs = require('fs');
var path = require('path');
var he = require('./src/translations/he.json');

function dirTree(filename) {
  terms = fs.readdirSync(filename).map(function (child) {
    const term =
      path
        .basename(filename + '/' + child, '.svg')
        .replace(/_|\d\w?/g, ' ')
        .replace(/(.*)( , )(.*)/, '$3 $1')
        .trim()
        .toLowerCase();
    
    var definition = '';

    Object.keys(he).forEach(key => {
      if (key === term) {
        // definition = he[key];
      }
    });

    const info = { term };
    return info;
  });

  return terms;
}

if (module.parent == undefined) {
  // node dirTree.js ~/foo/bar
  const util = require('util');
  const tree = dirTree('./public/images/mulberry-symbols/');
  const flags = {};
  const filtered = tree.filter((image) => {
    if (flags[image.term]) {
      return false;
    }
    flags[image.term] = true;
    return true;
  });
  console.log(util.inspect(filtered.length, false, null));
  var json = JSON.stringify(tree);
  fs.writeFile('myjsonfile.json', json);
}