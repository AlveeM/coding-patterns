const Heap = require('collections/heap');

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const merge_lists = lists => {
    const minHeap = new Heap([], null, ((a, b) => b.val - a.val));

    lists.forEach(a => {
        if (a !== null) {
            minHeap.push(a);
        }
    });

    let resultHead = null;
    let resultTail = null;
    while (minHeap.length > 0) {
        const node = minHeap.pop();
        if (resultHead === null) {
            resultHead = resultTail = node;
        } else {
            resultTail.next = node;
            resultTail = resultTail.next;
        }

        if (node.next !== null) {
            minHeap.push(node.next);
        }
    }

    return resultHead;
}

// TC: O (n * log k)
// SC: O(k)

const l1 = new ListNode(2);
l1.next = new ListNode(6);
l1.next.next = new ListNode(8);

const l2 = new ListNode(3);
l2.next = new ListNode(6);
l2.next.next = new ListNode(7);

const l3 = new ListNode(1);
l3.next = new ListNode(3);
l3.next.next = new ListNode(4);

let result = merge_lists([l1, l2, l3]);
process.stdout.write('Merged list elements: ');
while (result !== null) {
  process.stdout.write(`${result.val} `);
  result = result.next;
}