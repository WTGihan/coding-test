# Simple Basic Dining Application

## Setup Project

For setup project follow these steps:

- ### Clone the project.
- ### First ensure global dependencies are installed.
  - Node, Typescript
- ### Setup the backend.

  - Create .env file on root and add data according to .envSample file.
  - Create config.json file add database data according to config.json.template.
  - After create above files navigate to backend folder and open the terminal run the following command to install dependencies.
    -       npm install
  - After complete install dependencies run following command to run migrations in Database.

    - First ensure database connect with application using following command to run application in root folder
      -       npm run dev
    - After that navigate src folder and run follow command to run migrations files.
      -       npx sequelize-cli db:migrate
    - After complete migration run seeds data for your database before run following commands you can modify data according to relations and add the data personal reference.

      -       npx sequelize-cli db:seed:all

      - You can run individually by run following code
        -       npx sequelize-cli db:seed --seed <SeederFileName>

  - Do resave index.ts file to restart the application.
  - Finally you can access the backend given url with protected way.

- ### Setup Frontend
  - First navigate to frontend folder and run following command to run depedencies for application.
    -       npm install
  - Create .env file add the data according to sample .envSample file.
  - After that run the application using following command
    -       npm run start

## Folder Architecture

### Backend

    - backend/
        - src/
            - config/
            - controllers/
            - middleware/
            - migrations/
            - moduels/
            - routes/
            - schemas/
            - seeders/
            - util/
            - index.ts
        - .env
        - package.json
        - package-lock.json
        - .gitingore
        - node_modules/

### Frotend

    - frontend/
        - src/
            - app/
            - assets/
            - components/
            - hooks/
            - model/
            - modules/
                - feature
                    - components/
                        - subFeatureComponent/
                            - SubFeatureComponent.tsx
                            - subFeatureComponent.css
                    - pages/
                    - services/
                    - slices/
                        - root.ts
                        - featureSlice.ts
            - services/
            - styles/
            - types
            - util/
            - App.tsx
            - App.css
            - index.tsx
            - index.css
        - .env
        - package.json
        - package-lock.json
        - .gitingore
        - public
        - node_modules/
