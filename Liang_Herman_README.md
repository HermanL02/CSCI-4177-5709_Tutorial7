# Tutorial#7

* *Date Created*: 26 Mar 2023
* *Last Modification Date*:  26 Mar 2023
* *Deployment URL*: <>
* *GitLab URL*: <>

## Author

* [Herman Liang](yq687754@dal.ca)

### Payloads

Please note that the payloads are required to be set to "JSON" format under "raw" in Postman

1. POST /people (Create a new person)
Request payload:
{
    "name": "Herman",
    "age": 2,
    "city": "Halifax"
}
2. GET /people (Fetch all people, no payload required)
3. PUT /people/:id (Update a person by ID)
Request payload:
{
    "name": "Jane Doe",
    "age": 28,
    "city": "Los Angeles"
}
4. GET /people/:id 
5. DELETE /people/:id 

### Prerequisites

To have a local copy of this assingnment and running on your local machine, you will first need to install the following software / libraries / plug-ins

```
Web Frameworks: ExpressJS based on NodeJS
```

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

1. Install Node.js, which can be found at (https://nodejs.org/en/)

2. Enter the directory of this project, using "npm install" to install all dependencies

3. use "npm run dev" to develop the project 

## Deployment

Use "run run build" and "npm run start" to deploy the program

## Built With

[Node.js] - The JavaScript runtime used
[Express.js] - The web framework used for building server-side applications and APIs with Node.js

## Sources Used

General References: (The whole project is using below resources):
Express Docs: https://expressjs.com/en/api.html#express

## Acknowledgments
