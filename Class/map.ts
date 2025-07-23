let studendScore = new Map<string, number>();
studendScore.set("Alice", 85);
studendScore.set("Bob", 92);
studendScore.set("Charlie", 78);    
console.log(studendScore.get("Alice")); // Output: 85
console.log(studendScore.get("Bob"));   // Output: 92
console.log(studendScore.size); // Output: 3
console.log(studendScore.has("Charlie")); // Output: true
console.log(studendScore.has("David")); // Output: false
studendScore.delete("Charlie");
console.log(studendScore.size); // Output: 2    
studendScore.set("Eve", 90);
console.log(studendScore.get("Eve")); // Output: 90 
console.log(studendScore); // Output: Map(3) { 'Alice' => 85, 'Bob' => 92, 'Eve' => 90 }    
console.log(studendScore.keys()); // Output: MapIterator { 'Alice', 'Bob', 'Eve' }
console.log(studendScore.values()); // Output: MapIterator { 85, 92 , 90 }
console.log(studendScore.entries()); // Output: MapIterator { [ 'Alice', 85 ], [ 'Bob', 92 ], [ 'Eve', 90 ] }
console.log(studendScore.forEach((value, key) => console.log(`${key}: ${value}`))); // Output: Alice: 85, Bob: 92, Eve: 90  

studendScore.clear();
console.log(studendScore.size); // Output: 0
