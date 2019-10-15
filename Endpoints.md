
# API Guide
This is a guide for Airbnb's web team to access the database. 

URL: LabsAirbnb-env-dev.us-west-1.elasticbeanstalk.com

## Routes

|  Route |  Receives | Returns  | Format |
|:---:|:---:|:---:|:---:|
|  '/data' | listing_id  | Retrieve all listing features associated with the passed id | list[json] |
|  '/comparison' | listing_id  | Retrieve the most popular listing that is similar to the inputed listing | list[json] |
|  '/pricing'| listing_id  | Retrieves 10 percentiles based on listing location | list[json] |
|  '/amenities' | listing_id  | Returns listing amenities and missing amenities that the most popular listings offer | list[json] |
| '/percentiles | listing_id & filter ('z','p','zp') | Returns percentile count based on zipcode, property, or both | list[json] |