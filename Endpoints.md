
# API Guide
This is a guide for Airbnb's web team to access the database. 

URL: LabsAirbnb-env-dev.us-west-1.elasticbeanstalk.com

## Routes

|  Route |  Receives | Returns  | Format |
|:---:|:---:|:---:|:---:|
|  '/data' | id  | Retrieve all listing features associated with the passed id | list[json] |
|  '/comparison' | id  | Retrieve the most popular listing that is similar to the inputed listing | list[json] |
|  '/pricing'| id  | Retrieves 10 percentiles based on listing location | list[json] |
|  '/amenities' | id  | Returns listing amenities and missing amenities that the most popular listings offer | list[json] |
| '/percentiles | id & filter ('z','p','zp') | Returns percentile count based on zipcode, property, or both | list[json] |
