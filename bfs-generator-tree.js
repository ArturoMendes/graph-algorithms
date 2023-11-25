/**
 * T is a generator tree of G.
 *
 * ```
 *  G = {
 *      V: [v1, v2, v3]
 *      A: [a12, a23]
 *  }
 * ```
 *
 * @param {*} G graph G = (V, A)
 * @param {*} v vertex v (v ∈ V)
 * @returns T
 */
const bfsGeneratorTree = (G, v) => {
  let Q = [];
  let T = {
    V: G.V,
    A: [],
  };
  let estado = {};

  for (let i = 0; i < G.V.length; i++) {
    estado[G.V[i]] = 0;
  }

  estado[v] = 1;
  Q.push(v);

  while (Q.length !== 0) {
    let w = Q.at(0);
    let edgesThatIncludeW = G.A.filter((a) => a.includes(w));
    let vertecesNextToW = edgesThatIncludeW.flat().filter((e) => e !== w);

    for (let i = 0; i < vertecesNextToW.length; i++) {
      let u = vertecesNextToW[i];

      if (estado[u] === 0) {
        Q.push(u);
        estado[u] = 1;
        T.A.push([w, u]);
      }
    }

    Q.shift();
  }

  return T;
};

// TODO: move to a test
// G = {
//     V: ['1', '2', '3', '4', '5', '6'],
//     A: [['1', '2'], ['1', '5'], ['2', '5'], ['2', '3'], ['3', '5'], ['3', '4'], ['4', '5'], ['4', '6']]
// }

// v = '1'

// const res = bfsGeneratorTree(G, v)
// console.log(res.A, res.V)

export default bfsGeneratorTree;
