const express = require('express')
const request = require('request');
const cheerio = require('cheerio');
const cors = require('cors')
const server = express()
const port = process.env.PORT || 5555
const url = 'https://xn--42cah7d0cxcvbbb9x.com/'

server.use(cors())

server.get('/', (req, res) => {
  res.send({
      status: 'success',
      response: 'Please go to https://github.com/max180643/thai-gold-api for API usage.',
    },
    200,
  )
})

server.get('/latest', (req, res) => {
  request(url, (error, response, html) => {
    if (!error && response.statusCode === 200) {
      const $ = cheerio.load(html)
      date = $('#rightCol > div.divgta.goldshopf > table > tbody > tr:nth-child(5) > td.span.bg-span.txtd.al-r').text()
      update_time = $('#rightCol > div.divgta.goldshopf > table > tbody > tr:nth-child(5) > td.em.bg-span.txtd.al-r').text()
      gold_buy = $('#rightCol > div.divgta.goldshopf > table > tbody > tr:nth-child(3) > td:nth-child(3)').text()
      gold_sell = $('#rightCol > div.divgta.goldshopf > table > tbody > tr:nth-child(3) > td:nth-child(2)').text()
      goldBar_buy = $('#rightCol > div.divgta.goldshopf > table > tbody > tr:nth-child(2) > td:nth-child(3)').text()
      goldBar_sell = $('#rightCol > div.divgta.goldshopf > table > tbody > tr:nth-child(2) > td:nth-child(2)').text()
      res.send({
          status: 'success',
          response: {
            date: date,
            update_time: update_time,
            price: {
              gold: {
                buy: gold_buy,
                sell: gold_sell,
              },
              gold_bar: {
                buy: goldBar_buy,
                sell: goldBar_sell,
              },
            }
          }
        },
        200,
      )
    } else {
      res.send({
          status: 'failure',
          response: 'Service is unavailable, Please try again later.',
        },
        404,
      )
    }
  })
})

server.get('*', (req, res) => {
  res.send({
      status: 'failure',
      response: 'route not found.',
    },
    404,
  )
})

server.listen(port, () => console.log('Server running at port %d.', port))