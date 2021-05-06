## Requirements
### for deployment and usage
- php 7.3 or higher
- mysql 5.7 or higher

### for developemt and maintain
- nodejs 12.13.0 or higher

## How to install
- clone this repo to your machine.
- run ```composer install``` to download all dependencies. make sure this goes fine with no errors.
- copy the ```.env.example``` file with out .example extension in the root of the project folder.
- create a database in your mysql.
- modify ```.env``` file copy fill the database name and access credentials of your mysql(username:root, password:).
- go to ```storage/app/``` and copy the file ```settings.example``` in the same place with the extension ```.json```. so you have the file ```storage/app/settings.json``` with same contents in the ```settings.example``` file. this is important step make sure you done it correctly.
- run ```php artisan migrate``` to migrate your database and create tables.
- run ```php artisan db:seed``` to seed your database and create defualt records(admin, regions and cities).
- run ```php artisan serve``` to start the server and head to [http://localhost:8000](http://localhost:8000).

## Development
- run ```npm i``` to install all required node_modules.
- after making changes to your resources files run ```npm run dev``` to recompile your public files. or alternativly run ```npm run watch``` to keep watching for changes and recompile automatically.

#### Questions
for any questions dont hesitate to email me at [seyam.ms@gmail.com](mailto:seyam.ms@gmail.com), or find me on [Facebook](https://facebook.com/SeyamMs) or [Twitter](https://twitter.com/SeyamMs).