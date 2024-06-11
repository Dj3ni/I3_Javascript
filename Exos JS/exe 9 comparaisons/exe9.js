const A = 3
const B = 9
const C = true
const D = false
const E = "4"
const F = "3"

A === 3 //true
A === F //false
A < B // true
C //true
E > F //true
(A < B) == C //true
(A < B) != D //true
(A === F) === C // false
(A === F) != C // true
C !== false //true
A < E //true
4 == E //true
C !== D // true
C != D // true

/* Les opérateurs logiques*/

(A === 3) && (A === F) && (A < B) //False
(A === 3) || (A === F) || (A < 3) // True

(A === 3) && !(A === F) && (A < B) //True

