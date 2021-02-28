# Junior Dev Assignment
## Info
This program is designed to combine data from two APIs to a more simple one. The API only provides one endpoint which the frontend calls to get all the data at once. I considered splitting the data into parts in the backend, but decided to transfer all the data at once. Reasons for this were simplicity, and the fact that this way the client only has to wait for the data to arrive once.

The app runs at the moment at http://aceserve.xyz. If you want to query the backend straightly you can do it at http://aceserve.xyz/api/data.

## Technologies
Project is created with:
- Python FastAPI version: 0.63
- React version: 17.0.1
## Setup
### Backend
To run the app you have to install the requirements for the backend. I recommend creating a virtual environment for this, but first you have to change directory into the backend directory (note that these instructions are for Linux and macOS): 
```shell
$ cd backend
$ python3 -m venv venv
$ source venv/bin/activate
$ pip -r requirements.txt
$ python3 main.py
```
Now the backend is running, and it logs to a file called logs.log.
### Frontend
To run the frontend you can do the following commands (from the root directory):
```shell
$ cd frontend
$ npm install
$ npm start
```
That should automatically open a new tab in your browser. Note that it can take a while for the backend to get the data the first time. But after it has gotten it once it updates it so that you can access it the whole time.
## Other info
The backend gets automatically new data for each category every 4-update time minutes. If it exceeds the 5 retries, it will use the old data until the next update. This is a considered decision. I decided to do it this way because when I followed the logs, this never happened. The frontend queries to the backend every 4 minutes.