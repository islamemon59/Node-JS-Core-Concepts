const fs = require("fs");
const path = require("path");

//add another file on dirname with join
const sourceDir = path.join(__dirname, "output", "messy-files");
const organizedDir = path.join(__dirname, "output", "organized");

const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
  documents: [".pdf", ".doc", ".docx", ".txt", ".rtf"],
  videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
  audio: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
  code: [".js", ".py", ".java", ".cpp", ".html", ".css"],
  archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
  spreadsheets: [".xls", ".xlsx", ".csv"],
  others: [],
};
const testFiles = [
  "vacation.jpg",
  "report.pdf",
  "presentation.pptx",
  "music.mp3",
  "video.mp4",
  "script.js",
  "data.csv",
  "archive.zip",
  "photo.png",
  "notes.txt",
  "app.py",
  "movie.avi",
  "song.wav",
  "backup.tar.gz",
  "random.xyz",
  "nodejs.zip",
];

function initializeCategories() {
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });
  }

  testFiles.forEach((file) => {
    fs.writeFileSync(path.join(sourceDir, file), `Content for ${file}`);
  });

  console.log("Messy file are created!!");

  if (!fs.existsSync(organizedDir)) {
    fs.mkdirSync(organizedDir, { recursive: true });
  }
  Object.keys(categories).forEach((category) => {
    const categoryPath = path.join(organizedDir, category);
    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath);
    }
  });
}

function getCategory(fileName) {
  const ext = path.extname(fileName).toLowerCase();
  // [images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"]]
  for (const [category, extension] of Object.entries(categories)) {
    if (extension.includes(ext)) {
      return category;
    }
  }

  return "others";
}

function organizeFiles() {
  console.log("file organizer \n");
  console.log("source", sourceDir);
  console.log("Destination", organizedDir);
  console.log("\n" + "-".repeat(60) + "\n");

  //check dir length
  const files = fs.readdirSync(sourceDir);

  if (files.length === 0) {
    console.log("no files to work on");
    return;
  }
  console.log(`found ${files.length} files to organized \n`);

  const stats = {
    total: 0,
    byCategory: {},
  };

  files.forEach((file) => {
    //get single file
    const sourcePath = path.join(sourceDir, file);
    //check it is directory or file
    const stat = fs.statSync(sourcePath);

    if (stat.isDirectory()) {
      return;
    }

    const category = getCategory(file);
    const destDir = path.join(organizedDir, category);
    const destPath = path.join(destDir, file);

    fs.copyFileSync(sourcePath, destPath);

    stats.total++;
    stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;

    console.log(`${file}`);
    console.log(`${category}`);
    console.log(`${stat.size}`);
  });
}

function showHelp() {
  console.log(`
    file organizer - usage:
    commands:
    init - create files
    organize - organize file into categories

    example: 
    node file-organizer init
    node file-organizer organize
    `);
}

const command = process.argv[2];

switch (command) {
  case "init":
    initializeCategories();
    break;
  case "organize":
    organizeFiles();
    break;
  default:
    showHelp();
    break;
}
