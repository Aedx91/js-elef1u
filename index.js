let inventory = {
  items: [
    { name: "apple", quantity: 5 },
    { name: "banana", quantity: 2 },
    { name: "orange", quantity: 3 }
  ],
  addItem: function(name, quantity) {
    this.items.push({ name: name, quantity: quantity });
  },
  removeItem: function(name) {
    let itemIndex = this.items.findIndex(item => item.name === name);
    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1);
    }
  },
  updateItem: function(name, quantity) {
    let item = this.items.find(item => item.name === name);
    if (item) {
      item.quantity = quantity;
    }
  }
};

// Example usage
inventory.addItem("grapes", 4);
inventory.removeItem("banana");
inventory.updateItem("apple", 10);
console.log(inventory.items);
