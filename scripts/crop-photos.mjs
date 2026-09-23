// Recorta capturas de Instagram (iPhone 923×2000) y genera fotos limpias en public/photos.
// Uso: npm run crop
//
// Cada captura tiene el chrome en sitios distintos (barra de estado, cabecera del
// post, badge "1/12", icono de etiquetas, botón de volumen, iconos de like). Por eso
// cada foto lleva su caja explícita. Si una foto no tiene caja, se detectan las
// bandas planas (claras u oscuras) arriba y abajo automáticamente.
import sharp from 'sharp'
import { mkdir } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const RAW = join(root, 'scripts', 'raw')
const OUT = join(root, 'public', 'photos')

// left, top, width, height
const photos = [
  { raw: '3.jpg',  out: 'novia-catedral-valencia.jpg',  box: { left: 0,   top: 392,  width: 900, height: 1048 } },
  { raw: '4.jpg',  out: 'novios-coche-clasico.jpg',     box: { left: 0,   top: 482,  width: 900, height: 1018 } },
  { raw: '5.jpg',  out: 'novia-padre-blauverd.jpg',     box: { left: 0,   top: 482,  width: 900, height: 1008 } },
  { raw: '6.jpg',  out: 'pasillo-arcos-luz.jpg',        box: { left: 0,   top: 582,  width: 900, height: 820 } },
  { raw: '7.jpg',  out: 'coche-iglesia-santa-catalina.jpg', box: { left: 0, top: 482, width: 900, height: 1022 } },
  { raw: '8.jpg',  out: 'novia-pendiente-perlas.jpg',   box: { left: 0,   top: 526,  width: 900, height: 1008 } },
  { raw: '9.jpg',  out: 'novios-ruinas-cartuja.jpg',    box: { left: 0,   top: 500,  width: 900, height: 1015 } },
  { raw: '10.jpg', out: 'novios-cartuja-ara-christi.jpg', box: { left: 0,  top: 500,  width: 900, height: 1015 } },
  // Retrato de Sara: miniatura del grid del perfil (única foto personal disponible)
  { raw: '2.jpg',  out: 'sara-wedding-planner.jpg',     box: { left: 618, top: 1154, width: 305, height: 405 }, upscale: 2 },
]

async function detectBars(file) {
  const { data, info } = await sharp(file).greyscale().raw().toBuffer({ resolveWithObject: true })
  const { width, height } = info
  const isFlat = y => {
    let sum = 0, sq = 0
    for (let x = 0; x < width; x += 4) { const v = data[y * width + x]; sum += v; sq += v * v }
    const n = Math.ceil(width / 4)
    const mean = sum / n
    return sq / n - mean * mean < 60 && (mean > 225 || mean < 30)
  }
  let top = 0; while (top < height / 2 && isFlat(top)) top++
  let bottom = height - 1; while (bottom > height / 2 && isFlat(bottom)) bottom--
  return { left: 0, top, width, height: bottom - top + 1 }
}

await mkdir(OUT, { recursive: true })

for (const p of photos) {
  const src = join(RAW, p.raw)
  const box = p.box ?? (await detectBars(src))
  let img = sharp(src).extract(box)
  if (p.upscale) img = img.resize(box.width * p.upscale, box.height * p.upscale, { kernel: 'lanczos3' }).sharpen({ sigma: 0.6 })
  await img.jpeg({ quality: 90, mozjpeg: true }).toFile(join(OUT, p.out))
  console.log(`${p.raw} → ${p.out} (${box.width}×${box.height})`)
}

// Logo: recorte del círculo de perfil → PNG transparente (tinta) y versión blanca
const LOGO_BOX = { left: 250, top: 790, width: 400, height: 190 }
const logoGrey = await sharp(join(RAW, '1.jpg'))
  .extract(LOGO_BOX)
  .resize(LOGO_BOX.width * 2, LOGO_BOX.height * 2, { kernel: 'lanczos3' })
  .greyscale()
  .linear(1.35, -60) // blanco puro → fondo, gris del monograma se conserva suave
  .raw()
  .toBuffer({ resolveWithObject: true })

const { width: lw, height: lh } = logoGrey.info
for (const [name, rgb] of [['logo-ink.png', [28, 27, 26]], ['logo-white.png', [255, 255, 255]]]) {
  const buf = Buffer.alloc(lw * lh * 4)
  for (let i = 0; i < lw * lh; i++) {
    const alpha = 255 - logoGrey.data[i]
    buf[i * 4] = rgb[0]; buf[i * 4 + 1] = rgb[1]; buf[i * 4 + 2] = rgb[2]
    buf[i * 4 + 3] = alpha < 12 ? 0 : alpha
  }
  await sharp(buf, { raw: { width: lw, height: lh, channels: 4 } }).trim().png().toFile(join(OUT, name))
  console.log(`1.jpg → ${name}`)
}

// Icono de la web: círculo del perfil
await sharp(join(RAW, '1.jpg'))
  .extract({ left: 160, top: 588, width: 604, height: 604 })
  .resize(512, 512)
  .png()
  .toFile(join(root, 'app', 'icon.png'))
console.log('1.jpg → app/icon.png')

// OG image 1200×630: foto hero + velo + nombre del estudio
const ogSvg = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="#1C1B1A" stop-opacity="0.9"/>
      <stop offset="0.6" stop-color="#1C1B1A" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#1C1B1A" stop-opacity="0.1"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <text x="80" y="200" font-family="Arial, sans-serif" font-size="20" letter-spacing="8" fill="#E9B8B3">WEDDING PLANNER · VALENCIA</text>
  <rect x="80" y="232" width="64" height="2" fill="#E9B8B3"/>
  <text x="76" y="345" font-family="Georgia, serif" font-style="italic" font-size="104" letter-spacing="-3" fill="#FAF7F4">Cásate conmigo</text>
  <text x="80" y="420" font-family="Georgia, serif" font-size="34" fill="#FAF7F4" fill-opacity="0.85">Que tu única preocupación sea elegir el ramo.</text>
</svg>`)

await sharp(join(OUT, 'novia-catedral-valencia.jpg'))
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .composite([{ input: ogSvg }])
  .jpeg({ quality: 88 })
  .toFile(join(root, 'public', 'og-image.jpg'))
console.log('og-image.jpg generada')
