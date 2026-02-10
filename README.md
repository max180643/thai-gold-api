# Thai Gold API

API for checking latest Thai Gold prices

## Requirements

- Node LTS

## Installation

```sh
# Install dependencies
pnpm install

# Build the project
pnpm build

# Run the development server
pnpm dev
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
  "status":"success",
  "response":{
    "update_date":"02/02/2569",
    "update_time":"เวลา 17:23 น. (ครั้งที่ 69)",
    "price":{
      "gold":{
        "buy":"69,523.76",
        "sell":"71,950.00"
      },
      "gold_bar":{
        "buy":"70,950.00",
        "sell":"71,150.00"
      }
    }
  }
}
```

</details>

## Warning

This API crawl data from goldtraders.or.th and the API cannot handle URL in case of 404 yet
