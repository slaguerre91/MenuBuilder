# Menu Builder
This vanilla JS web app is a meal planning tool using the [Edanam food API]('https://www.edamam.com/'). Users can search for foods and add them to their menu while keeping track of calorie, protein, carbs and fat intake.

## Tech Stack
* Javascript (vanilla)
* PHP + Apache
* HTML + CSS + Bootstrap

## Deployment Instructions
1. Place the project files in the application folder located in your server
2. Install dependencies
```bash
composer install
```

3. Configure .env file using .env.example
```.env
APP_ID="MyAppId"
APP_KEY="MyApiKey"
```

4. Configure **.htaccess** file with a 404 redirect of your choice
```.htaccess
RewriteRule  ^(.+)$ yourdomain [QSA,L]
```

## Licence
This project is licensed under the terms of the MIT license.

