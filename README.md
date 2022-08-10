# Scrapeit Cloud NodeJS SDK
[Scrapeit Cloud](https://scrape-it.cloud/) - Web Scraping API with Proxy Rotation. Get valuable data at scale in HTML format from any website without need for a proxy.

Interface to call [Scrapeit Cloud API](https://scrape-it.cloud/) easily from Node.

## Install

    npm install --save scrapeit-cloud-node-sdk

## Usage
Signup to Scrapeit Cloud to  [get your API key](https://app.scrape-it.cloud/sign-up)  and some free credits to get started.

    import ScrapeitSDK from './index';

    const main = async() => {
      const scrapeit = new ScrapeitSDK('INSERT_YOUR_API_KEY_HERE');

      try {
        const response = await scrapeit.scrape({
          "url": "https://example.com",
          "screenshot": true,
          "proxy_country": "US",
          "proxy_type": "datacenter"
        });

        console.log(response);
      } catch(e) {
        console.log(e.message);
      }
    };

    main();

Scrapeit Cloud supports various parameters to execute a custom JavaScript script, use a premium proxy from a specific geolocation and more.

You can find all the supported parameters on [Scrapeit Cloud documentation](https://scrape-it.cloud/docs/).
