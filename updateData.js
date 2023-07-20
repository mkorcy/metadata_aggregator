const fs = require('fs');
const yaml = require('js-yaml');

const projects = {};

// read all metadata.json files
const projectDirs = fs.readdirSync('.', { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

for (const dir of projectDirs) {
  const metadataFile = `${dir}/metadata.json`;
  if (fs.existsSync(metadataFile)) {
    const metadata = JSON.parse(fs.readFileSync(metadataFile, 'utf8'));
    projects[dir] = metadata;
  }
}

// write to _data/projects.yml
fs.writeFileSync('_data/projects.yml', yaml.dump(projects));
