
class StringBuilder {
  constructor(value) {
    this.value = value;
  }

  getValue(value) {
    return this.value;
  }
  
  padEnd(value) {
    this.value = this.value + value;
    return this;
    }
  
    padStart(value) {
    this.value = value + this.value;
    return this;
  }
  
  padBoth(value) {
    this.value = value + this.value + value;
    return this;
  }
};

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="