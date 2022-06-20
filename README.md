# IssueTrackerProject
IssueTracker with Angular and Django Rest framework

# Issue Tracker Project

The Issue Tracker Project is a simple Issue Tracke realized in Django Restframework (backend) and Angular (frontend)

## Installation Backend

To install please make sure you installed [Python](https://www.python.org/downloads/).
Once Python is installed, install [PIP](https://bootstrap.pypa.io/get-pip.py) in the same folder as Python.
Then use the Commandline:

```bash
py get-pip.py
```

Then use python to create a virtual environment with this command:

```bash
py -m venv venv
```

To run the virtual environment under windows 10

```bash
.\venv\Scripts\activate
```

Once the the virtual environment is running use pip install Django, as well as Django Rest framework and Cors Headers

```bash
pip install django
pip install djangorestframework
pip install django-cors-headers
```

After all the installations are done, you can start the backend

```bash
py manage.py runserver
```

This starts the backend on default port 8000 which is used by the Angular frontend:
http://localhost:8000/issues

## Installation Frontend

Please install [node.js](https://nodejs.org/en/) and run the included npm to install Angular

```bash
npm install
```

Once Angular is installed launch the frontend from the Commandline with

```bash
ng serve
```

This start the Angular Frontend on default port 4200 (which is whitelisted in the backend):
http://localhost:4200/

