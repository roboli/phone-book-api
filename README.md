# phone-book-api

## Requirements

- Node ~v18.12.0
- MySQL ~v5.7

## Install

* Please rename `.env.example` to `.env` and fill the values.

* Then run `npm i`

* Make sure you have an empty database.

* Run DB migration up `npm run migrate up`

## Run

* For production run with `npm run build && npm start`
* For development run with `npm run start:dev`

## Testing

* Run with `npm run test:e2e`

## Reasoning

* MySQL: I feel comfortable working with SQL, I think it is the best language out there to manipulate data. In my experience, I only use MongoDB when storing huge quantities data is required, data with simple and repetive structure, for logging events for example. I've not been lucky enough to work on a project with thousands of users and where data sharding is required, so far SQL has been the right choice for me.

## Trade-offs

* Again with database/MySQL, I might switch to something else if the application needs to scale.

## Done differently

* I chose Puresql as the database layer for this app. I used it only once before for a small project I did a year ago and I find that it has a really intesting motivation behind it, to keep using SQL instead of JS for accessing data. But I shoot myself on the foot by choosing it too, I had no time left to fix the pagination feature as I've not done it with this library before :(

* I don't use TypeScript on a daily basis so by using it took me like 35% of the time just sorting out compilation erros. I must be honest and tell you that I did a pet project as a proof of concept before starting the test, this to know if the libraries I use run under TypeScript, if I've not done this probably it would have take me all day to make it work. So leaving TypeScript out would have been a choice if possible.

* I left out validation completely.

* Increase integration testing coverage.

* Implement unit testing.
