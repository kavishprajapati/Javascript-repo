const players = [
    {
      Name: 'Ravindra',
      Sports: ['Chess', 'Cricket'],
    },
    {
      Name: 'Ravi',
      Sports: ['Cricket', 'Football'],
    },
    {
      Name: 'Rishabh',
      Sports: ['Table-Tennis', 'Football'],
    }
  ];
  
  const sportsGroups = players.reduce((acc, player) => {
    player.Sports.forEach(sport => {
      if (!acc[sport]) {
        acc[sport] = [player.Name];
      } else {
        acc[sport].push(player.Name);
      }
    });
    return acc;
  }, {});
  
  const result = Object.entries(sportsGroups).map(([sport, players]) => ({ [sport]: players }));
  
  console.log(result);
