class Storage {
  _items = [];

  constructor(initialItems = []) {
    this._items = initialItems.slice();
  }

  getItems() {
    return this._items;
  }

  addItem(newItem) {
    this._items.push(newItem);
  }

  removeItem(oldItem) {
    const index = this._items.indexOf(oldItem);
    this._items.splice(index, 1);
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]