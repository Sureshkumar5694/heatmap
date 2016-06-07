var a= [{
  "deviceId":"1212",
  "region": "stall_6",
  "timeSpent": 1200
},{
  "deviceId":"1213",
  "region": "stall_5",
  "timeSpent": 1000
},{
  "deviceId":"1214",
  "region": "stall_1",
  "timeSpent": 500
},{
  "deviceId":"1213",
  "region": "stall_5",
  "timeSpent": 200
},{
  "deviceId":"1214",
  "region": "stall_1",
  "timeSpent": 630
},{
  "deviceId":"1215",
  "region": "stall_1",
  "timeSpent": 700
},{
  "deviceId":"1213",
  "region": "stall_2",
  "timeSpent": 100
},{
  "deviceId":"1277",
  "region": "stall_1",
  "timeSpent": 450
},{
  "deviceId":"1234",
  "region": "stall_2",
  "timeSpent": 30
},{
  "deviceId":"1213",
  "region": "stall_3",
  "timeSpent": 564
},{
  "deviceId":"1295",
  "region": "stall_3",
  "timeSpent": 23
},{
  "deviceId":"1264",
  "region": "stall_3",
  "timeSpent": 343
},{
  "deviceId":"1276",
  "region": "stall_4",
  "timeSpent": 10
},{
  "deviceId":"1341",
  "region": "stall_6",
  "timeSpent": 907
},{
  "deviceId":"1345",
  "region": "stall_1",
  "timeSpent": 504
},{
  "deviceId":"1332",
  "region": "stall_5",
  "timeSpent": 884
},{
  "deviceId":"1232",
  "region": "stall_6",
  "timeSpent": 2
},{
  "deviceId":"1444",
  "region": "stall_6",
  "timeSpent": 70
},{
  "deviceId":"1991",
  "region": "stall_4",
  "timeSpent": 34
},{
  "deviceId":"1111",
  "region": "stall_7",
  "timeSpent": 6
},{
  "deviceId":"1352",
  "region": "stall_7",
  "timeSpent": 54
},{
  "deviceId":"1213",
  "region": "stall_7",
  "timeSpent": 60
},{
  "deviceId":"1245",
  "region": "stall_1",
  "timeSpent": 34
},{
  "deviceId":"1564",
  "region": "stall_2",
  "timeSpent": 454
}]

var timeSpentAtEachBeacon = [0,0,0,0,0,0,0];
var noOfMobilesAtEachBeacon = [0,0,0,0,0,0,0];
var score;
for(var i=0; i<a.length; i++){
	 score = score1(Math.round(a[i].timeSpent/60 ));
	switch(a[i].region){
			
			case "stall_1" :
				timeSpentAtEachBeacon[0]+= score;
				noOfMobilesAtEachBeacon[0]++;
				break;

			case "stall_2" :
				timeSpentAtEachBeacon[1]+= score;
				noOfMobilesAtEachBeacon[1]++;
				break;

			case "stall_3" :
				timeSpentAtEachBeacon[2]+= score;
				noOfMobilesAtEachBeacon[2]++;
				break;
			
			case "stall_4" :
				timeSpentAtEachBeacon[3]+= score;
				noOfMobilesAtEachBeacon[3]++;
				break;

			case "stall_5" :
				timeSpentAtEachBeacon[4]+= score;
				noOfMobilesAtEachBeacon[4]++;
				break;

			case "stall_6" :
				timeSpentAtEachBeacon[5]+= score;
				noOfMobilesAtEachBeacon[5]++;
				break;

			case "stall_7" :
				timeSpentAtEachBeacon[6]+= score;
				noOfMobilesAtEachBeacon[6]++;
				break;
	}
}

function score1(timeSpent){

	if(timeSpent <= 2){return 0}

	else if(timeSpent > 2 && timeSpent < 6){return 1}

	else if(timeSpent > 5 && timeSpent < 9){return 2}
	
	else if(timeSpent > 8 && timeSpent < 12){return 3}

	else if(timeSpent > 11 && timeSpent < 15){return 4}

	else return 5;	
}

var maxTimeSpent = Math.max(...timeSpentAtEachBeacon);

var timeSpentAtEachBeaconCopy = timeSpentAtEachBeacon;

var beacons = document.getElementsByClassName('beacon-size');
for(var i = 0 ; i < timeSpentAtEachBeacon.length ; i++){
	timeSpentAtEachBeacon[i] =  Math.round(timeSpentAtEachBeacon[i]/maxTimeSpent * 5 );

	switch(timeSpentAtEachBeacon[i]){
		case 1 : 
			beacons[i].style.backgroundColor = "yellow";
			break;

		case 2 : 
			beacons[i].style.backgroundColor = "green";
			break;
		
		case 3 : 
			beacons[i].style.backgroundColor = "purple";
			break;	

		case 4 : 
			beacons[i].style.backgroundColor = "brown";
			break;
	
		case 5 : 
			beacons[i].style.backgroundColor = "red";
			break;
	}
}


// function showDetails




