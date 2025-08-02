## Description
AAA service

## Running the app

```bash
# development
1- Please install docker and docker compose

2- Change .env.example to .env ( I dont clean anything from env if you want you can run with these configs )

3- fill the OPEN_WEATHER_MAP_APP_ID KEY 

4- npm run dev:app:start ( App run on docker compose environment . )

5- you can access to SWAGGER UI form http://localhost:PORT/api-docs

*** I write docker for production but if you want to run too y should change .env values for production env .

```
***
### NOTICE
If you want to delete dev DB you can run this command

```bash
  npm run dev:db:restart
```


## Stay in touch

- Author - [Reza Mousavi](https://www.linkedin.com/in/rzms/)

## License

Nest is [MIT licensed](LICENSE).