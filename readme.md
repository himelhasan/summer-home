# Summer House Coordination Website API Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [API Endpoints](#api-endpoints)
    - [Authentication Endpoints](#authentication-endpoints)
    - [User Profile Endpoints](#user-profile-endpoints)
    - [Minyan Requests Endpoints](#minyan-requests-endpoints)
    - [Homepage Data Endpoints](#homepage-data-endpoints)
    - [Admin Endpoints (if applicable)](#admin-endpoints-if-applicable)

## 1. Introduction

The Summer House Coordination Website provides a set of API endpoints to facilitate coordination and communication within the community of summer house owners in upstate New York. These endpoints
allow users to perform various actions, including user registration, authentication, profile management, Minyan requests, and access to essential data on the homepage.

## 2. API Endpoints

The Summer House Coordination Website provides a set of API endpoints to handle various functionalities. Below is a list of the available endpoints and their purposes:

1. **Authentication Endpoints**:

    - `/api/auth/register`: Register a new user.
    - `/api/auth/login`: Authenticate and log in a user.
    - `/api/auth/logout`: Log out a user.
    - `/api/auth/user`: Get user profile data.

2. **User Profile Endpoints**:

    - `/api/user/profile`: Get or update user profile information.
    - `/api/user/preferences`: Manage user notification preferences.
    - `/api/user/checkin`: Check in for the coming weekend.

3. **Minyan Requests Endpoints**:

    - `/api/minyan/request`: Send a request for a Minyan.
    - `/api/minyan/notifications`: Handle Minyan request notifications.
    - `/api/minyan/status`: Check the Minyan status for the upcoming weekend.

4. **Homepage Data Endpoints**:

    - `/api/homepage/weather`: Fetch the 7-day weather forecast.
    - `/api/homepage/parsha`: Retrieve the weekly Parsha.
    - `/api/homepage/zmanim`: Get Zmanim for the current week.
    - `/api/homepage/attendance`: Retrieve attendance data for the upcoming weekend.

5. **Admin Endpoints** (if applicable):
    - `/api/admin/create-poll`: Create a poll for administrators.
    - `/api/admin/manage-members`: Admin ability to manage members.

### Authentication Endpoints

1. **Register a User**

    - **Endpoint:** `/api/auth/register`
    - **Description:** Register a new user with the website.
    - **Method:** POST
    - **Parameters:** User registration details (name, email, password).
    - **Example Request:**
        ```json
        {
            "name": "John Doe",
            "email": "johndoe@example.com",
            "password": "securepassword"
        }
        ```
    - **Example Response:**
        ```json
        {
            "message": "User registered successfully."
        }
        ```

2. **User Login**

    - **Endpoint:** `/api/auth/login`
    - **Description:** Authenticate and log in a user.
    - **Method:** POST
    - **Parameters:** User credentials (email, password).
    - **Example Request:**
        ```json
        {
            "email": "johndoe@example.com",
            "password": "securepassword"
        }
        ```
    - **Example Response:**
        ```json
        {
            "token": "jsonwebtokenwebtoken",
            "user": {
                "id": "12345",
                "name": "John Doe",
                "email": "johndoe@example.com"
            }
        }
        ```

3. **User Logout**

    - **Endpoint:** `/api/auth/logout`
    - **Description:** Log out the currently authenticated user.
    - **Method:** POST
    - **Example Response:**
        ```json
        {
            "message": "User logged out successfully."
        }
        ```

4. **Get User Profile**
    - **Endpoint:** `/api/auth/user`
    - **Description:** Retrieve user profile data.
    - **Method:** GET (Authenticated)
    - **Example Response:**
        ```json
        {
            "id": "12345",
            "name": "John Doe",
            "email": "johndoe@example.com"
        }
        ```

### User Profile Endpoints

1. **Get or Update User Profile Information**

    - **Endpoint:** `/api/user/profile`
    - **Description:** Retrieve or update user profile information, including personal details and contact information.
    - **Method:** GET (Authenticated) and PUT (Authenticated)
    - **Example Request (PUT):**
        ```json
        {
            "name": "John Doe",
            "phoneNumbers": ["123-456-7890", "987-654-3210"],
            "emailAddresses": ["johndoe@example.com", "johndoe2@example.com"]
        }
        ```
    - **Example Response (GET):**
        ```json
        {
            "id": "12345",
            "name": "John Doe",
            "phoneNumbers": ["123-456-7890", "987-654-3210"],
            "emailAddresses": ["johndoe@example.com", "johndoe2@example.com"]
        }
        ```

2. **Manage User Notification Preferences**

    - **Endpoint:** `/api/user/preferences`
    - **Description:** Configure notification preferences, including email, SMS, or both.
    - **Method:** PUT (Authenticated)
    - **Example Request:**
        ```json
        {
            "notificationMethod": ["email", "sms"]
        }
        ```
    - **Example Response:**
        ```json
        {
            "message": "Notification preferences updated."
        }
        ```

3. **Check-in for the Coming Weekend**
    - **Endpoint:** `/api/user/checkin`
    - **Description:** Confirm attendance for the upcoming weekend, specify attendance status (YES or MAYBE), and select the number of attendees.
    - **Method:** POST (Authenticated)
    - **Example Request:**
        ```json
        {
            "status": "YES",
            "numberOfAttendees": 4
        }
        ```
    - **Example Response:**
        ```json
        {
            "message": "Attendance confirmed for the upcoming weekend."
        }
        ```

### Minyan Requests Endpoints

1. **Send a Minyan Request**

    - **Endpoint:** `/api/minyan/request`
    - **Description:** Request a Minyan for the upcoming weekend.
    - **Method:** POST (Authenticated)
    - **Example Response:**
        ```json
        {
            "message": "Minyan request sent."
        }
        ```

2. **Handle Minyan Request Notifications**

    - **Endpoint:** `/api/minyan/notifications`
    - **Description:** Handle Minyan request notifications (email or SMS) to all members.
    - **Method:** POST (Admin)
    - **Example Response:**
        ```json
        {
            "message": "Notifications sent to all members."
        }
        ```

3. **Check the Minyan Status for the Upcoming Weekend**
    - **Endpoint:** `/api/minyan/status`
    - **Description:** Check the Minyan status for the upcoming weekend.
    - **Method:** GET
    - **Example Response:**
        ```json
        {
            "minyanStatus": "THERE WILL BE A MINYAN THIS SHABBOS"
        }
        ```

### Homepage Data Endpoints

1. **Fetch 7-day Weather Forecast**

    - **Endpoint:** `/api/homepage/weather`
    - **Description:** Retrieve the 7-day weather forecast for Hurleyville, NY.
    - **Method:** GET
    - **Example Response:**
        ```json
        {
            "forecast": {
                // Weather forecast data
            }
        }
        ```

2. **Retrieve Weekly Parsha**

    - **Endpoint:** `/api/homepage/parsha`
    - **Description:** Get the weekly Parsha (e.g., "Parashat Miketz").
    - **Method:** GET
    - **Example Response:**
        ```json
        {
            "parsha": "Parashat Miketz"
        }
        ```

3. **Get Zmanim for the Current Week**

    - **Endpoint:** `/api/homepage/zmanim`
    - **Description:** Fetch Zmanim for the current week, including Friday candle lighting time and Saturday/Shabbos end time.
    - **Method:** GET
    - **Example Response:**

        ```json
        {
            "zmanim": {
                // Zmanim data
            }
        }
        ```

4. **Retrieve Attendance Data for the Upcoming Weekend**
    - **Endpoint:** `/api/homepage/attendance`
    - **Description:** Get attendance data for the upcoming weekend, including the number of confirmed attendees and "maybes."
    - **Method:** GET
    - **Example Response:**
        ```json
        {
            "confirmedAttendees": 4,
            "maybes": 3
        }
        ```

### Admin Endpoints (if applicable)

1. **Create a Poll for Administrators**

    - **Endpoint:** `/api/admin/create-poll`
    - **Description:** Create a poll for administrators to gather feedback or opinions from members.
    - **Method:** POST (Admin)
    - **Example Response:**
        ```json
        {
            "message": "Poll created successfully."
        }
        ```

2. **Admin Ability to Manage Members**
    - **Endpoint:** `/api/admin/manage-members`
    - **Description:** Admin access to manage member accounts, permissions, or other administrative tasks.
    - **Method:** GET and POST (Admin)
    - **Example Response:**
        ```json
        {
            "message": "Admin tasks completed successfully."
        }
        ```
#   s u m m e r - h o m e  
 