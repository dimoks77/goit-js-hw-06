class Storage {
  #items = [];

  constructor(initialItems = []) {
    this.#items = initialItems.slice();
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(oldItem) {
    const index = this.#items.indexOf(oldItem); // indexOf возвращает индекс элемента  oldItem в массиве #items

    if (index !== -1) { // -1 если элемент не найден
      this.#items.splice(index, 1); // splice - удаляет кол-во элементов (1), в массиве items, начиная с позиции index
    } else {
      console.error(`${oldItem} not found in the storage.`);
    }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
storage.removeItem("NonExistentItem"); // "NonExistentItem not found in the storage."
