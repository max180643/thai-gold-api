Thai Gold API
=============
API for checking latest Thai Gold prices

Requirements
------------
- Node LTS

Installation
------------

```sh
$ npm install
$ npm run start
```

or

```sh
$ yarn
$ yarn start
```

API
---
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
        "date": "06 สิงหาคม 2562",
        "update_time": "เวลา 17:09 น.",
        "prices": {
            "gold": {
                "buy": "21,800.00",
                "sell": "20,814.68"
            },
            "gold_bar": {
                "buy": "21,300.00",
                "sell": "21,200.00"
            }
        }
    }
}
```
</details>

Warning
-------
This API crawl data from ทองคําราคา.com and the API cannot handle URL in case of 404 yet