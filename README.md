# foodTrucksSF
A simple web application to fetch a list of food trucks local to SF

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Serving in Development](#serving-in-development)
    1. [Testing](#testing)
1. [Roadmap](#roadmap)

## Usage

>Sometimes you just crave artisan food served from a truck. The purpose of this app is to meet this need. Next time you are in SF, take a look here and find your next treasure.

## Requirements

- Node 10.2.1 or higher
- NPM 5.6.0 or higher

## Development

### Installing Dependencies

From within the root directory:

```
cd client
yarn
```

## Serving in Development

From within the root directory:

```
cd client
yarn start
```

## Testing

From within the root directory:

Client side testing:
```
cd client
yarn test
```

Server side testing:
```
yarn test
```

### Style Guide

For this project I'm using the popular [Airbnb style guide for React](https://github.com/airbnb/javascript/tree/master/react). Eslint is installed to help keep styles consistent. 

### Features

The features of this app are very simple:

1. You can type any address in San Francisco and get all the food trucks that are within a mile of that location.
1. Each result displays the name of the food truck applicant, hours of operation, what kinds of food they serve, and the distance from the given location.
1. All results are sorted by distance.
1. All results have a universal deep link to locate the food truck on google maps. 
1. All results also have a universal deep link to call an uber driver and auto populate the destination.
1. This web app is mobile responsive. 

### Architecture

React rendering starts in App.js. To keep it simple because of time constraints I avoided adding redux and react navigation. For a more robust front end I highly recommend those two options. For an even more robust front end you may want to consider options like [Apollo Client working with GraphQL](https://www.apollographql.com/docs/react). Apollo Client handles caching with optimistic UI for faster responses and GraphQL is a standardized language for calling your APIs and only getting back the data you care about.

I chose AWS Beanstalk for hosting logging and monitoring. This project is not yet ready for production, but you can see the [dev server here](http://sffoodtrucks-env.hdpieguuig.us-west-2.elasticbeanstalk.com). I have a very simple Nodejs server serving the static build files that webpack transpiles. 

Given more more time I would add a Docker container and setup CI. Also, although I added the ability to use current location in the browser, I still need to add [SSL encryption](https://developers.google.com/web/updates/2016/04/geolocation-on-secure-contexts-only) for geolocation in the browser to work when in production. 

## AWS Lambda Function

To demonstrate a technique for scaling Nodejs horizontally, I chose to host AWS Lambda service for fetching and filtering food truck data. Although this is not typically necissary for such a small app, I wanted to demostrate how you could scale a popular API endpoint seperately.

You can see the majority of the app logic here on the [AWS Lambda sfFoodTruckService](https://github.com/synapticsynergy/sfFoodTruckService)

### Roadmap

- As a user I want to get directions to the food truck so that I can walk or drive there.
- As a user I want to see more details about the food truck on Yelp so that I can see how other people liked it.
- As a user I want to easily request a ride from Uber through the app. 
