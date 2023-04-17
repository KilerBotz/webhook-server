const express = require('express');
const axios = require('axios')
const app = express();
const router = express.Router();
app.get('/cosplay', async(req, res) => {
        let data = await fetchJson('https://raw.githubusercontent.com/Elainadev1140/resultsgirl/main/resultsgirl.json')
        let result = data[Math.floor(Math.random() * data.length)]
        results = await getBuffer(result)
        res.set({'Content-Type': 'image/png'})
        res.send(results)
})

app.get('/loli', async(req, res) => {
        let data = await fetchJson('https://github.com/AdrianTzy/V1/raw/main/anime/loli.json')
        let result = data[Math.floor(Math.random() * data.length)]
        results = await getBuffer(result)
        res.set({'Content-Type': 'image/png'})
        res.send(results)
})

app.get('/neko', async(req, res) => {
        let data = await fetchJson('https://github.com/AdrianTzy/V1/raw/main/anime/neko.json')
        let result = data[Math.floor(Math.random() * data.length)]
        results = await getBuffer(result)
        res.set({'Content-Type': 'image/png'})
        res.send(results)
})

app.get('/random', async(req, res) => {
        let data = await fetchJson('https://github.com/AdrianTzy/V1/raw/main/anime/random.json')
        let result = data[Math.floor(Math.random() * data.length)]
        results = await getBuffer(result)
        res.set({'Content-Type': 'image/png'})
        res.send(results)
})

app.get('/husbu', async(req, res) => {
        let data = await fetchJson('https://github.com/AdrianTzy/V1/raw/main/anime/husbu.json')
        let result = data[Math.floor(Math.random() * data.length)]
        results = await getBuffer(result)
        res.set({'Content-Type': 'image/png'})
        res.send(results)
})

app.get('/shota', async(req, res) => {
        let data = await fetchJson('https://github.com/AdrianTzy/V1/raw/main/anime/shota.json')
        let result = data[Math.floor(Math.random() * data.length)]
        results = await getBuffer(result)
        res.set({'Content-Type': 'image/png'})
        res.send(results)
})

app.get('/waifu', async(req, res) => {
        let data = await fetchJson('https://github.com/AdrianTzy/V1/raw/main/anime/waifu.json')
        let result = data[Math.floor(Math.random() * data.length)]
        results = await getBuffer(result)
        res.set({'Content-Type': 'image/png'})
        res.send(results)
})

app.use(router)
app.listen(3000, () => {
  console.log('server started');
});

let fetchJson = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}


let getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
        }
