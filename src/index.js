const glob = require('glob');
const fs = require('fs');

const website = "https://w3c-ccg.github.io/vc-examples";

let parent = require('path').resolve(__dirname, '../docs');
glob(parent + '/**/*.json', {}, (err, files) => {

  var promises = files.map(function (fileName) {
    return fs.promises.readFile(fileName, 'utf-8')
      .then((data) => {
        let jsonData = JSON.parse(data);
        let typeArray = jsonData.type;
        if (typeArray && typeArray.includes("VerifiableCredential")) {
          typeArray.splice(typeArray.indexOf('VerifiableCredential'), 1);
          let fixedName = fileName.substring(parent.length);
          return {
            "url": website + fixedName,
            "type": typeArray[0]
          };
        } else return null;
      });
  });

  Promise.all(promises).then((results) => {
    let filtered = results.filter((res) => {
      return res != null;
    });


    let data = JSON.stringify(filtered, null, 2);
    fs.writeFileSync(parent + '/index.json', data);
  });
});

