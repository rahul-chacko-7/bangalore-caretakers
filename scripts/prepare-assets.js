import sharp from 'sharp';
await sharp('public/assets/senior-caretaker-bond.jpg').resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 85 }).toFile('public/assets/social-preview.jpg');
for (const size of [192, 512]) await sharp('public/assets/site-logo.png').resize(size, size, { fit: 'contain', background: '#ffffff' }).png().toFile(`public/assets/icon-${size}.png`);
console.log('Generated social preview and correctly sized app icons');
