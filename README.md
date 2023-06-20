# Simple Basic Dining Application

## Setup Project

For setup project follow these steps:

- ### Clone the project.
- ### First ensure global dependencies are installed.
  - Node, Typescript
- ### Setup the backend.

  - Create a `.env` file in the root directory and populate it with the necessary data, as specified in the `.envSample` file.
  - Create a `config.json` file and add the required database information based on the provided `config.json.template`.
  - Once you have created the above files, navigate to the `backend` folder and open the terminal. Run the following command to install the dependencies:
    -       npm install
  - After the dependencies are installed, execute the following command to run the migrations in the database:

    - Ensure that the application is connected to the database by running the following command in the root folder:
      -       npm run dev
    - Once the application is running, navigate to the `src` folder and execute the following command to run the migration files:
      -       npx sequelize-cli db:migrate
    - After the migration is complete, you can populate the database with seed data. Before running the following commands, you can modify the data according to your relationships and personal preferences.

      -       npx sequelize-cli db:seed:all

      - If you prefer to run the seed data individually, use the following command:
        -       npx sequelize-cli db:seed --seed <SeederFileName>

  - Save the `index.ts` file to restart the application.
  - Finally, you can access the backend via the provided URL in a protected manner.

- ### Setup Frontend
  - Navigate to the `frontend` folder and run the following command to install the dependencies for the application:
    -       npm install
  - Create a `.env` file in the `frontend` folder and populate it with the required data, following the format provided in the `.envSample` file.
  - Run the application using the following command:
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

### Frontend

    - frontend/
        - src/
            - app/
            - assets/
            - components/
            - constants/
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
