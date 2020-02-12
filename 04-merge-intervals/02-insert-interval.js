class Interval {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }

    get_interval() {
      return (`[${this.start}, ${this.end}]`);
    }
}

const insert = function(intervals, newInterval) {
    let merged = [];
    let i = 0;

    // skip and add to output) all intervals that come before the 'new_interval'
    while (i < intervals.length && intervals[i].end < newInterval.start) {
        merged.push(intervals[i]);
        i += 1;
    }

    // merge all intervals that overlap with 'new_interval'
    while (i < intervals.length && intervals[i].start <= newInterval.end) {
        newInterval.start = Math.min(intervals[i].start, newInterval.start);
        newInterval.end = Math.max(intervals[i].end, newInterval.end);
        i += 1;
    }

    // insert the new_interval
    merged.push(newInterval);

    // add all the remaining intervals to the output
    while (i < intervals.length) {
        merged.push(intervals[i]);
        i += 1;
    }

    return merged;
};

// TC: O(n)
// SC: O(n)


let intervals = insert([
  new Interval(1, 3),
  new Interval(5, 7),
  new Interval(8, 12),
], new Interval(4, 6));
result = "";
for(i=0; i < intervals.length; i++) {
    result += intervals[i].get_interval() + " ";
}
console.log(`Intervals after inserting the new interval: ${result}`)


intervals = insert([
  new Interval(1, 3),
  new Interval(5, 7),
  new Interval(8, 12),
], new Interval(4, 10));
result = "";
for(i=0; i < intervals.length; i++) {
    result += intervals[i].get_interval() + " ";
}
console.log(`Intervals after inserting the new interval: ${result}`)


intervals = insert([
    new Interval(2, 3),
    new Interval(5, 7),
], new Interval(1, 4));
result = "";
for(i=0; i < intervals.length; i++) {
    result += intervals[i].get_interval() + " ";
}
console.log(`Intervals after inserting the new interval: ${result}`)