
import Food from './modules/food';
import ScorePanel from './modules/scorePanel'
import './style/index.less'

const food = new Food()
console.log(food.X, food.Y);
food.changeLocation() 
console.log(food.X, food.Y);

const scorePanel = new ScorePanel()
for (let i = 0; i < 30; i++) {
  scorePanel.addScore()
  
}





