# Thai Gold API

API for checking latest Thai Gold prices

## Requirements

- Node LTS

## Installation

```sh
$ npm install
$ npm run build
$ npm run start
```

or

```sh
$ yarn
$ yarn build
$ yarn start
```

## API

This API is based on HTTPS requests and JSON responses. `https://thai-gold-api.herokuapp.com/`

### Get latest gold prices

##### API request

`GET /latest`

##### API response

<details>
<summary>JSON</summary>

```json
{
  "status": "success",
  "response": {
    "date": "04 มกราคม 2565",
    "update_time": "เวลา 14:52 น.",
    "price": {
      "gold": { "buy": "29,000.00", "sell": "29,000.00" },
      "gold_bar": { "buy": "28,500.00", "sell": "28,400.00" }
    }
  }
}
```

</details>

## Warning

This API crawl data from ทองคําราคา.com and the API cannot handle URL in case of 404 yet
