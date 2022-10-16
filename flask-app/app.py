from flask import Flask, request
from careerjet_api_client import CareerjetAPIClient
from flask_pymongo import PyMongo
import json
from flask_cors import CORS, cross_origin
import os

# twilio
from twilio.rest import Client
from twilio.base.exceptions import TwilioRestException

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/db"
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

account_sid = os.environ.get("ACCOUNT_SID")
auth_token = os.environ.get("AUTH_TOKEN")
twilio_number = "+16695872010"


client = Client(account_sid, auth_token)


mongo = PyMongo(app)

cj  =  CareerjetAPIClient("en_US");

@app.route("/lookup", methods = ['POST'])
def lookup():

    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        data = request.json


        location = 'college park, maryland'
        keywords = ''
        contract_period = ''


        if 'location' in data.keys():
            location = data['location']
        
        if 'keywords' in data.keys():
            keywords = data['keywords']
        
        result_json = cj.search({
                        'location'    : location,
                        'keywords'    : keywords,
                        'contractperiod': contract_period,
                        'affid'       : '213e213hd12344552',
                        'user_ip'     : '11.22.33.44',
                        'url'         : 'http://www.example.com/jobsearch?q=python&l=london',
                        'user_agent'  : 'Mozilla/5.0 (X11; Linux x86_64; rv:31.0) Gecko/20100101 Firefox/31.0'
                      });

    return result_json



@app.route("/add_user", methods = ['POST'])
@cross_origin()
def add_user():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        match_profile = None
        data = request.json
        mentor = False        
        if data["role"] == "mentor":
            mentor = True
            mentor = {
                "name": data["name"],
                "careerArea": data["careerArea"],
                "job": data["job"],
                "location": data["location"],
                "matched": False,
                "email": data["email"],
                "phoneNumber": data["phoneNumber"],
                "interests": data["interests"]
            }
            
            mongo.db.mentors.insert_one(mentor)
            match_profile= match(False, data["email"])

        elif data["role"] == "mentee":
            mentee = {
                "name": data["name"],
                "careerArea": data["careerArea"],
                "job": data["job"],
                "location": data["location"],
                "matched": False,
                "email": data["email"],
                "phoneNumber": data["phoneNumber"],
                "interests": data["interests"]
            }

            mongo.db.mentees.insert_one(mentee)

            match_profile= match(True, data["email"])


        if match_profile:
            return match_profile
    
    return {"status": "error"}




def match(mentee, email):
    match_profile = None

    if mentee:
        profile = mongo.db.mentees.find_one({"email": email})
        match_profile = mongo.db.mentors.find_one({
                "careerArea": profile['careerArea'], 
                "matched": False
            })

    else:
        profile = mongo.db.mentors.find_one({"email": email})
        match_profile = mongo.db.mentees.find_one({
                "careerArea": profile['careerArea'],
                "matched": False
            })

    
    if match_profile:
        mentee_name = ""
        mentor_name = ""
        mentee_phone = ""
        mentor_phone = ""
        if mentee:
            new_profile = profile
            new_profile['matched'] = True
            new_profile['mentor_name'] = match_profile['name']
            new_profile['mentor_phone'] = match_profile['phoneNumber']

            mongo.db.mentees.update_one(
                {
                    'email': profile['email']
                },
                { "$set": new_profile}
            )

            mentor_profile = match_profile
            mentor_profile['matched'] = True
            mentor_profile['mentee_name'] = profile['name']
            mentor_profile['mentee_phone'] = profile['phoneNumber']

            mongo.db.mentors.update_one(
                {
                    'email': match_profile['email']
                },
                { "$set": mentor_profile}
            )

            mentee_phone = profile['phoneNumber']
            mentee_name = profile['name']
            mentor_phone = match_profile['phoneNumber']
            mentor_name = match_profile['name']

        else:
            new_profile = profile
            new_profile['matched'] = True
            new_profile['mentee_name'] = match_profile['name']
            new_profile['mentee_phone'] = match_profile['phoneNumber']

            mongo.db.mentors.update_one(
                {
                    'email': profile['email']
                },
                { "$set": new_profile}
            )

            mentee_profile = match_profile
            mentee_profile['matched'] = True
            mentee_profile['mentor_name'] = profile['name']
            mentee_profile['mentor_phone'] = profile['phoneNumber']

            mongo.db.mentees.update_one(
                {
                    'email': match_profile['email']
                },
                { "$set": mentee_profile}
            )

            mentee_phone = profile['phoneNumber']
            mentee_name = profile['name']
            mentor_phone = match_profile['phoneNumber']
            mentor_name = match_profile['name']


        try:
          # This could potentially throw an exception!
            message1 = client.messages.create(
                to=str(mentor_phone), 
                from_=twilio_number,
                body=f"You have been matched with a mentee!\nHere is their information:\nName: {mentee_name}\nPhone Number: {mentee_phone}")

            message2 = client.messages.create(
                to=str(mentee_phone), 
                from_=twilio_number,
                body=f"You have been matched with a mentor!\nHere is their information:\nName: {mentor_name}\nPhone Number: {mentor_phone}")

        except TwilioRestException as err:
          # Implement your fallback code here
          print(err)

        return { 
            "status": "ok",
            "match": {
                "name": match_profile['name'],
                "phone": match_profile['phoneNumber']
            }
        
        }
    
    return { "status": "match not found", "match": "none"}


if __name__ == "__main__":
  app.run()