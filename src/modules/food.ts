class Food {
  // 有哪些属性
  // 属性1，食物这个元素
  element: HTMLElement

  constructor() {
    // !肯定不为空
    this.element = document.getElementById('food')!
  }

  // 获取食物所在的X和Y坐标
  get X() {
    return this.element.offsetLeft
  }

  get Y() {
    return this.element.offsetTop
  }

  // 修改食物的位置
  changeLocation() {
    // 随机生成0-290的随机数
    // 290是怎么来的？stage宽度是304，边框2，食物10，所以右侧边界值为 304 - 2*2 - 10 = 290
    // 注意取整的问题，先四舍五入之后，再乘10
    const left = (Math.round(Math.random() * 29)) * 10
    const top = (Math.round(Math.random() * 29))* 10
    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }
} 

export default Food