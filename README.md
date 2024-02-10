# Project Name ReadMe

## Description
This project is a web application built to facilitate student interaction within a school or educational institution. It allows students to login using either their email and password or via Outlook authentication. Once logged in, students can edit their profiles and search for other users within the system.

## Tech Stack
- Frontend:
  - React JS
  - Tailwind CSS
- Backend:
  - Firebase Authentication
  - Firebase Database
  - Azure Authentication for Outlook

## Features
- **User Authentication:**
  - Users can login using either their email and password or Outlook authentication.
- **Profile Editing:**
  - Authenticated users can edit their profiles, including updating their personal information.
- **Search Functionality:**
  - Users can search for other users within the system and view their profiles.

## Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Set up Firebase and Azure authentication services.
5. Configure Firebase and Azure credentials in the project.
6. Run the project using `npm start`.

## Configuration
### Firebase Setup
1. Create a Firebase project in the Firebase console.
2. Enable Firebase Authentication and Firebase Realtime Database.
3. Obtain the Firebase configuration details.
4. Replace the Firebase configuration in the project.

### Azure Setup
1. Set up an Azure Active Directory (Azure AD) tenant.
2. Register your application with Azure AD.
3. Configure authentication settings for your application.
4. Obtain the Azure authentication details.
5. Replace the Azure authentication configuration in the project.

## Usage
- Once the project is set up and running, users can navigate to the login page.
- Users can choose between email/password authentication or Outlook authentication.
- After successful authentication, users can edit their profiles and search for other users.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

## Getting Started
To start the project, run the following command:
NPM start

## NPM Libraries Used
- [react](https://www.npmjs.com/package/react)
- [tailwindcss](https://www.npmjs.com/package/tailwindcss)
- [firebase](https://www.npmjs.com/package/firebase)
- [azure-identity](https://www.npmjs.com/package/@azure/identity)
- [azure-authentication-legacy](https://www.npmjs.com/package/@azure/authentication-legacy)
