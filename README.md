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

This API is based on HTTPS requests and JSON responses. `https://api.chnwt.dev/thai-gold-api`

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
    "date": "04 เมษายน 2567",
    "update": {
      "round": "4",
      "time": "14:24 น."
    },
    "gold_pure": "96.5%",
    "price": {
      "gold": {
        "buy": "40,350.00",
        "sell": "39,037.00"
      },
      "gold_bar": {
        "buy": "39,850.00",
        "sell": "39,750.00"
      },
      "change": {
        "compare_previous": "-50",
        "compare_yesterday": "+300"
      }
    }
  }
}
```

</details>

## Warning

This API crawl data from ทองคําราคา.com and the API cannot handle URL in case of 404 yet

## Environment variables

create .env file

```
# Analytics (optional)
TRACK_API_URL='' #umami-db-api
UMAMI_WEBSITE_NAME=''
UMAMI_WEBSITE_DOMAIN=''
```
