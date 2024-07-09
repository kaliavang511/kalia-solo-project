                                         Legacy 
                                

Overview
 This app offers a modern way to memorialize loved ones by using QR codes on gravestones. These codes link to personalized
tribute pages, filled with cherished memories, photos, and stories. Our goal is to help familieshonor and celebrate their 
loved ones' lives in a heartfelt and meaningful way, keeping their memories alive for future generations.

Features
-Create Tribute Pages: Easily create a tribute page with photos, videos, and stories.
-Generate QR codes that link directly to the tribute pages.
-Edit Tribute Pages: Update tribute pages as new memories are made.

Technologies Used
-Frontend: React, Redux, React Router, Bootstrap
-Backend: Node.js, Express
-Database: PostgreSQL


Installation
Clone the repository
git clone git@github.com:kaliavang511/kalia-solo-project.git


Install the dependencies:
npm install


Set up the database:
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(80) UNIQUE NOT NULL,
    "password" VARCHAR(1000) NOT NULL
);

CREATE TABLE "tribute" (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES "user"(id),
    First_Name VARCHAR(200),
    Middle_Name VARCHAR,
    Last_Name VARCHAR,
    obituary VARCHAR,
    image VARCHAR(300),
    video VARCHAR(300),
    Date_of_birth VARCHAR(20),
    Date_of_death VARCHAR(20)
);


To run server 
npm run server 

To run app
npm run client

Open your browser
Register or log in to your account.
Create a new tribute page by navigating to the home and click add new tribute page
fill out the form with your loved one's information.
Add photo url, videos url, and stories to the tribute page.
Generate a QR code that links to the tribute page.
Print the QR code and place it on the gravestone.


Welcome contributions! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's style guidelines and includes appropriate tests.


Contact
If you have any questions or need further assistance, please contact me at kaliavang511@gmail.com

