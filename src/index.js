class Team {
  constructor(name) {
    this.name = name;
  }
}
class HockeyTeam extends Team {
  constructor(name) {
    super(name);
    this.type = 'Hockey';
  }
  scoreGoal() {
    console.log('he shoots, he scores')
  }
}
class FootballTeam extends Team {
  constructor(name) {
    super(name);
    this.type = 'Football';
  }
  touchdown() {
    console.log('Go for two!')
  }
}
// this instance takes on all the properties of the above class
const wings = new HockeyTeam('Red Wings');
const lions = new FootballTeam('Lions');

wings.scoreGoal();
lions.touchdown();

console.log(wings, lions);