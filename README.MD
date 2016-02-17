# Hosting the Parse Server on Appcelerator's Cloud

Blog Post Here:  http://www.appcelerator.com/blog/2016/02/your-very-own-mbaas-how-to-move-from-parse-to-appcelerator-arrow/

Hosting the Parse Server on Arrow Cloud is easy.  Use this sample app to get started.

# Steps to Deploy

1.  Migrate your data to a MongoDB database.  Parse makes this easy and painless, see here: https://parse.com/docs/server/guide#migrating

2.  Clone or download this repo.

3.  Install dependencies `npm install`

4.  Open `app.js` and change the properties of `ParseServer` object (Mongo URL, appId, etc)

5.  Run it locally via `appc run` and test it out (see below sample cURL requests for testing)

6.  When you're all ready, publish it via `appc cloud publish`.  Upon publish you'll get a URL to your app.  The only thing left you have to do is change your clients to point to this new URL instead of the old Parse API (Note: you should get a CNAME for your API server).

For more information on using Arrow Cloud like setting up a CNAME, horizontally scaling, etc:  http://docs.appcelerator.com/platform/latest/#!/guide/Arrow_Cloud

For more information on migrating from Parse, using the Parse server, etc:  

https://parse.com/docs/server/guide#migrating

https://github.com/ParsePlatform/parse-server

For information on using push notifications and analytics:

http://docs.appcelerator.com/platform/latest/#!/guide/Appcelerator_Analytics

http://docs.appcelerator.com/arrowdb/latest/#!/guide/guides

### cURL Examples

```bash
# Create a new record
curl -X POST \
  -H "X-Parse-Application-Id: <AppIdHere>" \
  -H "Content-Type: application/json" \
  -d '{"score":234,"playerName":"John Doe","cheatMode":true}' \
  <YourUrlHere>/parse/classes/GameScore

# Get all records
curl -X GET \
  -H "X-Parse-Application-Id: <AppIdHere>" \
  -H "X-Parse-Master-Key: <MasterKeyHere>" \
  <YourUrlHere>/parse/classes/GameScore
```
