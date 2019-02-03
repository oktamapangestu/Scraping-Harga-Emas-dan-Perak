process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const scrapeIt = require('scrape-it');
const loadJsonFile = require('load-json-file');
const writeJsonFile = require('write-json-file');
const moment = require('moment');
const cron = require('node-cron');

cron.schedule('*/10 * * * *', function() {
	scrapGo();
  console.log('cron sedang berjalan');
});

function scrapGo() {
	scrapeIt('https://www.logammulia.com/id', {
        hargaEmas: 'body > section.index-hero > div.hero-price > div.child.child-2.has-bg.has-overlay.overlay-gold > div > p.last-price',
        hargaPerak: 'body > section.index-hero > div.hero-price > div.child.child-3.has-bg.has-overlay.overlay-silver > div > p.last-price'
      }).then(({ data, response }) => {
      	let hargaE = filter(data.hargaEmas);
      	let hargaP = filter(data.hargaPerak);
      	pushToJson(hargaE, hargaP);
      });
}


function filter(str) {
 	var patt = /\w.+\:\s(\w.+)/i;
 	var filterTitik = /Rp(\d+.+)\,/i
  var result = str.match(patt);
  var result = result[1].match(filterTitik);
  return result[1].replace('.','');
}

function pushToJson(hargaEmas, hargaPerak) {
	let dateNow = moment().format('L');
	(async () => {
	await writeJsonFile('data.json', {
		harga_emas: hargaEmas,
		harga_perak: hargaPerak,
		tanggal: dateNow
	});
	await loadJsonFile('data.json').then(json => {
	console.log(json);
});
})();
}





