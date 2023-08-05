## Guide To Use environment variables in project backend

**Create ".env" file in the root folder.**

Add below information in it:

```JavaScript
NODE_ENV = "development"
SERVER_PORT = 9001

DB_USERNAME= // add username for DB
DB_PASSWORD= // add password for DB
```
Add Database information according to your credentials. You can define more environment variable like shown above to use in code.
***Avoid using env variable directly, use config files to use env variables***

**By default server will run on port 9001 if no port is mentioned in the env file**
