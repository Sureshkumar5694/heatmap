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
var timeSpentAtEachBeaconInMin = [0,0,0,0,0,0,0];
var score;

for(var i=0; i<a.length; i++){
	 score = scoreCalculator(Math.round(a[i].timeSpent/60 ));
	switch(a[i].region){
			
			case "stall_1" :
				timeSpentAtEachBeacon[0]+= score;
        timeSpentAtEachBeaconInMin[0]+=Math.round(a[i].timeSpent/60 );
				noOfMobilesAtEachBeacon[0]++;
				break;

			case "stall_2" :
				timeSpentAtEachBeacon[1]+= score;
        timeSpentAtEachBeaconInMin[1]+=Math.round(a[i].timeSpent/60 );
				noOfMobilesAtEachBeacon[1]++;
				break;

			case "stall_3" :
				timeSpentAtEachBeacon[2]+= score;
        timeSpentAtEachBeaconInMin[2]+=Math.round(a[i].timeSpent/60 );
				noOfMobilesAtEachBeacon[2]++;
				break;
			
			case "stall_4" :
				timeSpentAtEachBeacon[3]+= score;
        timeSpentAtEachBeaconInMin[3]+=Math.round(a[i].timeSpent/60 );
				noOfMobilesAtEachBeacon[3]++;
				break;

			case "stall_5" :
				timeSpentAtEachBeacon[4]+= score;
        timeSpentAtEachBeaconInMin[4]+=Math.round(a[i].timeSpent/60 );
				noOfMobilesAtEachBeacon[4]++;
				break;

			case "stall_6" :
				timeSpentAtEachBeacon[5]+= score;
        timeSpentAtEachBeaconInMin[5]+=Math.round(a[i].timeSpent/60 );
				noOfMobilesAtEachBeacon[5]++;
				break;

			case "stall_7" :
				timeSpentAtEachBeacon[6]+= score;
        timeSpentAtEachBeaconInMin[6]+=Math.round(a[i].timeSpent/60 );
				noOfMobilesAtEachBeacon[6]++;
				break;
	}
}

function scoreCalculator(timeSpent){

	if(timeSpent <= 2){return 0}

	else if(timeSpent > 2 && timeSpent < 6){return 1}

	else if(timeSpent > 5 && timeSpent < 9){return 2}
	
	else if(timeSpent > 8 && timeSpent < 12){return 3}

	else if(timeSpent > 11 && timeSpent < 15){return 4}

	else return 5;	
}

var maxTimeSpent = Math.max(...timeSpentAtEachBeacon);
var popupBox = document.querySelector('.popup');
var closeButton = popupBox.querySelector('.close-button');
closeButton.addEventListener('click',closeDetails);
var beacons = document.getElementsByClassName('beacon-size');
var okButton = document.querySelector('.ok');
var startTime = document.querySelector('.from');
var endTime = document.querySelector('.to');


okButton.addEventListener('click',getTheTimePeriod);
for(var i=0; i < beacons.length ; i++){
beacons[i].addEventListener('click',showDetails)
}
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


function showDetails(event){
	var x = event.currentTarget.offsetLeft;
	var y = event.currentTarget.offsetTop;
  var beaconNumber = parseInt(event.currentTarget.getAttribute('name'));
  console.log(x,y);

	popupBox.style.display = "block";
  popupBox.style.left = x+"px";
  popupBox.style.top = y+"px";
	popupBox.querySelector('#TotalNumberOfUsers').innerHTML =  "Total Users     : "+noOfMobilesAtEachBeacon[beaconNumber-1];
	popupBox.querySelector('#TotalNumberOfMobile').innerHTML = "Total Time(min) : " +timeSpentAtEachBeaconInMin[beaconNumber-1];

}

function closeDetails(){
  popupBox.style.display = "none";
  removeEventListener('click',this);
}

function getTheTimePeriod(){
  var startTimeISO = new Date();
  var endTimeISO = new Date();

  startTimeISO.setHours(startTime.options[ startTime.selectedIndex ].value );
  endTimeISO.setHours(endTime.options[ endTime.selectedIndex ].value );
  startTimeISO.setMinutes(00);
  endTimeISO.setMinutes(00);
  startTimeISO.setSeconds(00);
  endTimeISO.setSeconds(00);

  console.log(startTimeISO.toISOString());
  console.log(endTimeISO.toISOString());
}



