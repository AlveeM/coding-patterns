class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
}

const find_cycle_start = head => {
    let cycleLength = 0;
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (slow === fast) {
            cycleLength = calculate_cycle_length(slow);
            break;
        }
    }
    return find_start(head, cycleLength);
};

const calculate_cycle_length = slow => {
    let current = slow;
    let length = 0;
    while (true) {
        current = current.next;
        length += 1;
        if (current === slow) {
            break;
        }
    }
    return length;
}

const find_start = (head, cycleLength) => {
    let p1 = head;
    let p2 = head;

    while (cycleLength > 0) {
        p2 = p2.next;
        cycleLength -= 1;
    }

    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }

    return p1;
}

head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)