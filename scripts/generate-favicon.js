const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function generateFavicon() {
    try {
        const svgBuffer = await fs.readFile(path.join(__dirname, '../public/icon.svg'));

        // Generate different sizes
        const sizes = [16, 32, 48, 64, 192, 512];

        // Generate PNGs for all sizes
        await Promise.all(
            sizes.map(size =>
                sharp(svgBuffer)
                .resize(size, size)
                .png()
                .toFile(path.join(__dirname, `../public/favicon-${size}.png`))
            )
        );

        // Copy the 32x32 version as favicon.png
        await fs.copyFile(
            path.join(__dirname, '../public/favicon-32.png'),
            path.join(__dirname, '../public/favicon.png')
        );

        console.log('Favicon files generated successfully!');
    } catch (error) {
        console.error('Error generating favicons:', error);
    }
}

generateFavicon();