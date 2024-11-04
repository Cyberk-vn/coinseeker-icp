<h1> Coinseeker.co x ICP Deployment </h1>
<img src="https://img.notionusercontent.com/s3/prod-files-secure%2F271fc176-6508-4bd5-984d-9b01fe690d66%2F6dcf5e7d-675e-470b-aaa5-8fdd3d5a9936%2FBanner_Image_2.png/size/w=1450?exp=1730792519&sig=mYbYmO3RO-JfgpJhYbEn8yyTN_qvB1nTpS37jL_9clM"/>

Coinseeker.co is leveraging on The Internet Computer to host and run our platform at a capacity without bound.
This repo currently contain the testing of web infrastructure components and developing of ICP canisters.

<h2>How to Get Started</h2>

To deploy this repository, requires an installation of: [IC SDK](https://internetcomputer.org/docs/current/developer-docs/setup/install/).

### dfx.json (on the root foler)

The dfx.json file is a configuration file which specifies the canister used for the dapp.

Currently, we only deploy a static website, so we setup only 1 canister (for the website it self, for future version, we can setup both the frontend and the backend as separated canister)

### Website (src folder)

The website is simple. It consists of an HTML file, CSS file, and Java Script files

The **index.html** is the static html page, and all the assets it need to display like image, styles and javascript function located in the **files** folder

### Deployment

The local replica is started by running:

```bash
dfx start --background
```

When the local replica is up and running, run this command to deploy the canisters:

```bash
dfx deploy
```
