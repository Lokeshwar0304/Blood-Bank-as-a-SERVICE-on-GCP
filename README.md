# Blood-Bank-as-a-SERVICE-on-GCP

## Problem Statement:
The current method for handling blood donors, blood banks, hospitals, and recipients is inefficient and disjointed. It can be time-consuming at times. Since it is not a linked network, identifying and searching for blood groups and donors can take time for people who are in need of blood or have been in an accident. The general treatment entails the following steps: waiting for an ambulance, going to the hospital, performing blood tests, and looking for blood. This is a time-consuming and inefficient procedure. As per the survey, 5.25 million accidents are occurring per year and among them 4.12 million people are in need for emergency blood. Managing blood for all of them across the world is a huge problem. 

Also, stored blood has to be used with-in 3-4 days after the expected date, stored blood is of no use and it brings the wastage of blood units. Nearly 9.8% of blood products are being wasted. On average, 3048 units of blood and blood products (packed red cells, plasma, platelets, and cryoprecipitate) were wasted. 

The issue of blood products wastage can be solved with our approach, and blood can be used in a precise way during emergency or pandemic situations.
This project was created to save time searching for blood from different organizations and blood donors,to suggest local hospitals, and to alert blood banks and other interested parties about the incident and blood emergency. So, we want to leverage the cloud technologies and come up with an efficient linked network system that solves the above problem.

## Architecture:
![alt text](https://github.com/Lokeshwar0304/Blood-Bank-as-a-SERVICE-on-GCP/blob/main/Blank%20diagram.jpeg)

## Main Features:
##### Notifications:
Sending notifications to different users, blood banks and hospitals, this is handled by **_Google Cloud Pub/Sub & Redis technologies_**. 
##### Data Storage:
**_Google Cloud Firestore_** is used to store data and it acts as a backend server in our application. 
##### Location:
**_Google Map API’s_** are used to show the precise location of donors, victims, blood banks and hospitals. Users live location is being used in our application. 
##### User Requests:
**_Google Cloud Functions_** to accept and respond to requests. 
##### Emergency Situations:
We used **_Face recognition and detection_** algorithms to detect the users in emergency situations. Face embeddings(user footprints) were stored in cloud storage. 

