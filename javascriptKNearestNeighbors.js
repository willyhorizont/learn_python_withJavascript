const kNearestNeighbors = (data, labels, point, k = 3) => {
    const kNearest = data.map((el, i) => ({ dist: Math.hypot(...Object.keys(el).map(key => point[key] - el[key])), label: labels[i] })).sort((a, b) => a.dist - b.dist).slice(0, k);

    return kNearest.reduce((acc, { label }, i) => {
        acc.classCounts[label] = Object.keys(acc.classCounts).indexOf(label) !== -1 ? acc.classCounts[label] + 1 : 1;
        if (acc.classCounts[label] > acc.topClassCount) {
            acc.topClassCount = acc.classCounts[label];
            acc.topClass = label;
        }
        return acc;
    }, { classCounts: {}, topClass: kNearest[0].label, topClassCount: 0 }
    ).topClass;
};
const DATA = [[0, 0], [0, 1], [1, 3], [2, 0]];
const LABELS = [0, 1, 1, 0];

const output = kNearestNeighbors(DATA, LABELS, [1, 2], 2);
console.log('output:', output);
// output: 1