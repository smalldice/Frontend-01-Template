class Animal {
  constructor() {
    this.leg = 4
  }

  bite(target) {
    typeof target.damage === 'function' && target.damage()
  }
}

class Dog extends Animal {
  constructor() {
    super()
    this.emotion = 'normal'
  }

  emotionChange(val, target) {
    if (val === 'anger') {
      this.bite(target)
    }
  }
}

class Human extends Animal {
  constructor() {
    super()
    this.health = 'normal'
  }

  damage() {
    this.health = 'legBroken'
  }
}
