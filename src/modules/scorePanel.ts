class ScorePanel {

  // 有哪些属性
  socre: number = 0
  level: number = 1
  scoreElm: HTMLElement
  levelElm: HTMLElement

  maxLevel: number
  upScore: number
  

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreElm = document.getElementById('score')!
    this.levelElm = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }

  addScore() {
    this.scoreElm.innerHTML = ++this.socre + ''
    if (this.socre % this.upScore === 0) {
      this.upLevel()
    }
  }

  upLevel() {
    if (this.level < this.maxLevel) {
      this.levelElm.innerHTML = ++this.level + ''
    }
  }

}

export default ScorePanel