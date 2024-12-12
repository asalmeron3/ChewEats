# ChewEats

## Description
This is a proof of concept for a fair trade delivery service. The idea is the app will get paid for matching the restaurant with a driver. The driver will get paid by both the restaurant and the customer based on their pre-determined amounts and estimated market fairness.

## API

### Routes
- [Restaurants](#restaurants)
- [Menu](#menu)

#### Restaurants

```
/api/restaurants
```

```
[ //...
  {
    id : 873293
    name: "WcDonald's"
    shared_rate_per_mile : 2.25
    lat: 5
    lng: 7
    min_revenue: 20.00
  }
  //...
]
```

| Field | Type | Description |
| ----- | ---- | ----------- |
| id | number | Unique restaurant ID |
| name | String | Name of the Restuarant |
| shared_rate_per_mile | decimal | Per mile rate the restaurant is willing to pay for a delivery |
| lat | number | Latitudal location of restaurant |
| lng | number | Longitudal locatoin of restaurant |
| min_revenue | decimal | The minimum revenue the restaurant would like to have minus the delivery fee |


#### Menu

```
/api/menu-items/:restId
```
**restId**:  this parameter refers to the unique id of the restaurant for which menu items to retrieve

```
[ //...
  {
    id : 456
    name: "Big Snack"
    price : 3.00
    restaurant_id: 873293
  }
  //...
]
```

| Field | Type | Description |
| ----- | ---- | ----------- |
| id | number | Unique menu item ID |
| name | String | Name of the menu item |
| price | decimal | Price of the menu item|
| restaurant_id | number | The id of the restaurant that the menu item belongs to|
