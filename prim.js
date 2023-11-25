/**
 * Minimal generator tree with Prim's algorithm
 */
const prim = (G, w) => {
  let T = {
    V: G.V,
    A: [],
  };
  let u = G.V[0]; // initial vertex
  let U = []; // visited verteces ordered
  /**
   * E = {
   *    [v]: [shortest_distance, vertex]
   * }
   */
  let E = {}; // weights table, each vertex is an entry with its least heavy edge connecting a visited vertex

  for (let i = 0; i < G.V.length; i++) {
    if (G.V[i] !== u) {
      E[G.V[i]] = [Infinity, u];
    }
  }

  E[u] = [0, u];

  let i = 0;
  while (i < G.V.length) {
    let u_i = G.V[i]
    let d = Infinity

    for (vertex in E) {
      if (!U.includes(vertex)) {
        let _d = E[vertex][0]
        if (_d < d) {
          u_i = vertex;
          d = _d
        }
      }
    }
    
    U.push(u_i);
    // is pushing the first vertex with itself
    if (E[u_i][1] !== u_i) T.A.push([u_i, E[u_i][1]]); // push edge with the least weight
    
    for (let j=0; j < G.V.length; j++) {
      let v = G.V[j];
      if (!U.includes(v)) {
        let d = w(u_i, v);
        if (isFinite(d) && d < E[v][0]) {
          E[v] = [d, u_i];
        }
      }
    }

    i = i + 1;
  }

  return T;
};

// TODO: move to a test
/* 
G = {
  V: ["1", "2", "3", "4", "5", "6", "7"],
  A: [
    ["1", "2"],
    ["1", "3"],
    ["1", "4"],
    ["2", "4"],
    ["2", "5"],
    ["3", "4"],
    ["3", "6"],
    ["4", "5"],
    ["4", "6"],
    ["4", "7"],
    ["5", "7"],
    ["6", "7"]
  ],
};

const w = (v1, v2) => {
    let weights = {
        "1": {
            "2": 2,
            "3": 4,
            "4": 1
        },
        "2": {
            "1": 2,
            "4": 3,
            "5": 10
        },
        "3": {
            "1": 4,
            "4": 2,
            "6": 5
        },
        "4": {
            "1": 2,
            "2": 3,
            "3": 2,
            "5": 2,
            "6": 8,
            "7": 4
        },
        "5": {
            "2": 10,
            "4": 2,
            "7": 6
        },
        "6": {
            "3": 5,
            "4": 8,
            "7": 1
        },
        "7": {
            "4": 4,
            "5": 6,
            "6": 1
        },
    }

    return weights[v1][v2] || Infinity
}

const res = prim(G, w)
console.log(res.A, res.V)
*/

export default prim;
