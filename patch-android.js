// Tự thêm quyền định vị nền vào AndroidManifest.xml (chạy trong lúc build trên GitHub)
const fs = require('fs');
const p = 'android/app/src/main/AndroidManifest.xml';
let x = fs.readFileSync(p, 'utf8');
const perms = `
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE_LOCATION" />
    <uses-permission android:name="android.permission.WAKE_LOCK" />
    <uses-feature android:name="android.hardware.location.gps" android:required="false" />
`;
if (x.indexOf('ACCESS_BACKGROUND_LOCATION') < 0) {
  x = x.replace(/(<manifest[^>]*>)/, '$1' + perms);
  fs.writeFileSync(p, x);
  console.log('✓ Đã thêm quyền định vị vào AndroidManifest.xml');
} else {
  console.log('Quyền đã có sẵn.');
}
