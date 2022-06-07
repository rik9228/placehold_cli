const clipboard = require('clipboardy');

function placehold() {
  const sizeX = process.argv[2] || 100; // 横幅：デフォルトでは100*100の画像が入る。
  const sizeY = process.argv[3] || 100; // 縦幅：デフォルトでは100*100の画像が入る。

  if (!process.argv[2]) {
    console.log('横幅が指定されませんでした。100pxで指定します。');
  }

  if (!process.argv[3]) {
    console.log('縦幅が指定されませんでした。100pxで指定します。');
  }

  clipboard.writeSync(`https://placehold.jp/${sizeX}x${sizeY}.png`);
  clipboard.readSync();

  console.log(`横幅：${sizeX}px 縦幅：${sizeY}px でクリップボードにコピーしました。`);
}

placehold();