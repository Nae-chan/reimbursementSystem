Expense Reimbursement System (ERS) API for REVATURE

The Expense Reimbursement System (ERS) will manage the process of reimbursing employees for expenses incurred while on company time. All employees in the company can login and submit requests for reimbursement and view their past tickets and pending requests. Finance managers can log in and view all reimbursement requests and past history for all employees in the company. Finance managers are authorized to approve and deny requests for expense reimbursement.

Models
User
The User model keeps track of users information.

Role
The Role model is used to track what permissions a user has

Reimbursement
The Reimbursement model is used to represent a single reimbursement that an employee would submit

ReimbursementStatus
The ReimbursementStatus model is used to track the status of reimbursements. Status possibilities are Pending, Approved, or Denied.

ReimbursementType
The ReimbursementType model is used to track what kind of reimbursement is being submitted. Type possibilities are Lodging, Travel, Food, or Other.

Endpoints
Security
Security should be handled through session storage. Admin should have access to everything by default. If an endpoint specifies admin that means only admin should be allowed. If a user does not have permission to access a particular endpoint it should return the following:

Status Code: 401 UNAUTHORIZED 
Content:
{
  "message": "The incoming token has expired"
}
Occurs if they do not have the appropriate permissions.
Available Endpoints
POST /login
GET /users
GET /users/:id
PATCH /users
GET /reimbursements/status/:statusId
GET /reimbursements/author/userId:userId
POST /reimbursements
PATCH /reimbursements

Login
URL /login

Method: POST

Request:

{
  username: string,
  password: string
}
Response:

  User
Error Response

Status Code: 400 BAD REQUEST
{
  message: "Invalid Credentials"
}
Find Users
URL /users

Method: GET

Allowed Roles finance-manager

Response:

[
  User
]
Find Users By Id
URL /users/:id

Method: GET

Allowed Roles finance-manager or if the id provided matches the id of the current user

Response:

[
  User
]
Update User
URL /users

Method: PATCH

Allowed Roles admin

Request The userId must be presen as well as all fields to update, any field left undefined will not be updated.

  User
Response:

  User
Find Reimbursements By Status
Reimbursements should be ordered by date

URL /reimbursements/status/:statusId
For a challenge you could do this instead:
/reimbursements/status/:statudId/date-submitted?start=:startDate&end=:endDate

Method: GET

Allowed Roles finance-manager

Response:

[
  Reimbursement
]
Find Reimbursements By User
Reimbursements should be ordered by date

URL /reimbursements/author/userId/:userId
For a challenge you could do this instead:
/reimbursements/author/userId/:userId/date-submitted?start=:startDate&end=:endDate

Method: GET

Allowed Roles finance-manager or if ther userId is the user making the request.

Response:

[
  Reimbursement
]
Submit Reimbursement
URL /reimbursements

Method: POST

Rquest: The reimbursementId should be 0

Reimbursement
Response:

Status Code 201 CREATED
  Reimbursement
Update Reimbursement
URL /reimbursements

Method: PATCH

Allowed Roles finance-manager

Request The reimbursementId must be presen as well as all fields to update, any field left undefined will not be updated. This can be used to approve and deny.

  Reimbursement
Response:

  Reimbursement

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**