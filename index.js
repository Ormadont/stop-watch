class StopWatch {
  #started = false;
  #startTime = null;
  #duration = 0;
  constructor() {
    this.reset()
  }
  reset() {
    this.#duration = 0
    this.#started = false
  }
  get duration() {
    return this.#duration;
  }
  start() {
    if (this.#started) {
      throw 'Запуск уже выполнен.'
    }
    this.#started = true
    this.#startTime = Date.now();
  }
  stop() {
    if (this.#started === false) {
      throw 'Запуск не выполнялся'
    }
    this.#started = false
    const endTime = Date.now();
    this.#duration = (endTime - this.#startTime) / 1000
  }
}

const sw = new StopWatch();
