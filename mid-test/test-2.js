function updateInventory(currentInventory, newInventory) {
    // สร้าง object สำหรับเก็บสินค้าโดยใช้ชื่อเป็น key
    const inventoryMap = {};

    // ใส่ข้อมูลสินค้าคงคลังปัจจุบัน
    currentInventory.forEach(item => {
        inventoryMap[item.name] = item.quantity;
    });

    // อัปเดตด้วยสินค้าคงคลังใหม่
    newInventory.forEach(item => {
        if (inventoryMap[item.name]) {
            inventoryMap[item.name] += item.quantity;
        } else {
            inventoryMap[item.name] = item.quantity;
        }
    });

    // แปลงกลับเป็น array of objects และเรียงตามชื่อสินค้า
    return Object.keys(inventoryMap)
        .sort()
        .map(name => ({
            name: name,
            quantity: inventoryMap[name]
        }));
}

/* =======================
   TEST CAS
======================= */

const currentInventory = [
    { name: 'item1', quantity: 10 },
    { name: 'item2', quantity: 5 },
    { name: 'item3', quantity: 8 }
];

const newInventory = [
    { name: 'item1', quantity: 5 },
    { name: 'item4', quantity: 7 },
    { name: 'item2', quantity: 10 }
];

console.log(updateInventory(currentInventory, newInventory));

/*
[
  { name: 'item1', quantity: 15 },
  { name: 'item2', quantity: 15 },
  { name: 'item3', quantity: 8 },
  { name: 'item4', quantity: 7 }
]
*/
