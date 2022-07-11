const fs = require('fs');

// items in JSON file for simplicity, store in a db for production applications
let items = require('/data/inventory-items.json');

export const itemsRepo = {
    getAll: () => items,
    getById: id => items.find(x => x.id.toString() === id.toString()),
    find: x => items.find(x),
    create,
    update,
    delete: _delete
};

export function create(item) {
    // generate new item id
    item.id = items.length ? Math.max(...items.map(x => x.id)) + 1 : 1;
    // set date created and updated
    item.dateCreated = new Date().toISOString();
    item.dateUpdated = new Date().toISOString();
    // add and save item
    items.push(item);
    saveData();
}

export function update(id, params) {
    const item = items.find(x => x.id.toString() === id.toString());
    // set date updated
    item.dateUpdated = new Date().toISOString();
    // update and save
    Object.assign(item, params);
    saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
export function _delete(id) {
    // filter out deleted item and save
    items = items.filter(x => x.id.toString() !== id.toString());
    saveData();
}

// private helper functions
export function saveData() {
    fs.writeFileSync('data/items.json', JSON.stringify(items, null, 4));
}