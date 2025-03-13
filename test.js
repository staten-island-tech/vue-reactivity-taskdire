const rides = [
  { name: "Space Mountain", time: "9:00 AM - 10:00 AM", availableSpots: 8 },
  {
    name: "Big Thunder Mountain",
    time: "10:30 AM - 11:30 AM",
    availableSpots: 5,
  },
  { name: "Splash Mountain", time: "12:00 AM - 1:00 PM", availableSpots: 4 },
  {
    name: "Pirates of the Caribbean",
    time: "1:30 PM - 2:30 PM",
    availableSpots: 6,
  },
  { name: "Haunted Mansion", time: "3:00 PM - 4:00 PM", availableSpots: 7 },
  {
    name: "Seven Dwarfs Mine Train",
    time: "4:30 PM - 5:30 PM",
    availableSpots: 3,
  },
  { name: "Jungle Cruise", time: "5:30 PM - 6:30 PM", availableSpots: 10 },
  { name: "Peter Pan's Flight", time: "7:00 PM - 8:00 PM", availableSpots: 5 },
  {
    name: "The Twilight Zone Tower of Terror",
    time: "8:30 PM - 9:30 PM",
    availableSpots: 4,
  },
  {
    name: "Guardians of the Galaxy: Cosmic Rewind",
    time: "10:00 PM - 11:00 PM",
    availableSpots: 6,
  },
];

const guests = {
  name: "Jordan",
  partySize: 4,
  rideChoices: [
    "Space Mountain",
    "Big Thunder Mountain",
    "Splash Mountain",
    "Pirates of the Caribbean",
    "Haunted Mansion",
  ],
};

function res(rides, guests) {
  let info = [];
  let party = guests.partySize;
  let x = 0;
  rides.forEach((ride) => {
    let rideParty = ride.availableSpots;
    let time = ride.time;
    const dash = "-";
    let timeValues = time.split(dash);
    let startTime = timeValues[0];
    let endTime = timeValues[1];
    if (!info.includes(startTime) || !info.includes(endTime)) {
      if (rideParty >= party) {
        let printParty = rideParty - party;
        info.push(
          "name:",
          ride.name,
          "time available:",
          time,
          "available spots:",
          printParty
        );
        x += 1;
      }
    }
    if (x === 3) {
      console.log(info);
    }
  });
}
res(rides, guests);
