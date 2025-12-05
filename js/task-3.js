class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value ;
  }

  padEnd(str) {
   this.#value = this.#value + str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

    padBoth(str) {
      this.#value = str + this.#value + str;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

//якщо ви це читаєте -- то я хочу вас посмішити.  виявляється що в консолі мало виводитися на 26 стрічці лише крапка, без лапок, а я думала ну де ж ті блядські лапки?? голову з чатом джипіті ламали вечір, а виявляється що лапки там вказані просто так))) ахахххахахаха