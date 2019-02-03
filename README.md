# Scraping-Harga-Emas-dan-Perak
Scraping harga terakhir emas dan perak yang ada pada website https://www.logammulia.com/id

# Tools
- Nodejs (v10.15.1)
- [Database-js-json](https://www.npmjs.com/package/database-js-json) 
- [Express](https://www.npmjs.com/package/express)
- [Load-json-file](https://www.npmjs.com/package/load-json-file)
- [Moment](https://www.npmjs.com/package/moment)
- [Node-cron](https://www.npmjs.com/package/node-cron)
- [Scrape-it](https://www.npmjs.com/package/scrape-it)
- [Write-json-file](https://www.npmjs.com/package/write-json-file)

# Cara menjalankan

1. Install terlebih dahulu package dengan perintah `npm install` atau `yarn install`
2. Jalankan file **bot.js** dengan perintah `node bot.js`. File bot.js digunakan untuk mengupdate harga emas dan perak dengan mengambil data setiap 10 menit.
3. Jalankan file **api.js** dengan perintah `node api.js`. File api.js digunakan untuk serve data json harga emas dan perak dengan Expressjs.
4. Sekarang kamu bisa akses http://localhost:3000/ untuk melihat hasilnya.
