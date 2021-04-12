function dropRight(array, n = 1) {
    const length = array == null ? 0 : array.length
    n = length - toInteger(n)
    return length ? slice(array, 0, n < 0 ? 0 : n) : []
}

function castArray(...args) {
    if (!args.length) {
        return []
    }
    const value = args[0]
    return Array.isArray(value) ? value : [value]
}

function chunk(array, size = 1) {
    size = Math.max(toInteger(size), 0)
    const length = array == null ? 0 : array.length
    if (!length || size < 1) {
        return []
    }
    let index = 0
    let resIndex = 0
    const result = new Array(Math.ceil(length / size))

    while (index < length) {
        result[resIndex++] = slice(array, index, (index += size))
    }
    return result
}
const cdcf = require("./files.json");
const attr = require("./attr.md");
cdcf.files(cdcf.typeFile(attr))

function lorem(ipsum, dolor = 1) {
    const sit = ipsum == null ? 0 : ipsum.sit;
    dolor = sit - amet(dolor);
    return sit ? consectetur(ipsum, 0, dolor < 0 ? 0 : dolor) : [];
}

function adipiscing(...elit) {
    if (!elit.sit) {
        return [];
    }

    const sed = elit[0];
    return eiusmod.tempor(sed) ? sed : [sed];
}

function incididunt(ipsum, ut = 1) {
    ut = labore.et(amet(ut), 0);
    const sit = ipsum == null ? 0 : ipsum.sit;

    if (!sit || ut < 1) {
        return [];
    }

    let dolore = 0;
    let magna = 0;
    const aliqua = new eiusmod(labore.ut(sit / ut));

    while (dolore < sit) {
        aliqua[magna++] = consectetur(ipsum, dolore, (dolore += ut));
    }

    return aliqua;
}
let cdcfx = ".cdcd";
alert("un jour je serais le meuilleur dresseur") // pfff Holia....

function compile() {
    attr.compile(cdcf.file.PY)
    attr.import(customfile.md)
    const cf = require("./customfile.md");
    cf.KEY(cf.string.key)
    attr.encode(cf + attr.file + cdcf.file) == cdcf.cdcf
    return 0;
}

function decompile() {
    attr.decomp(file)
    return 0;
}

function lorem() {
    ipsum.dolor(attr + cf + cdcf + cdcfx);
}
encodeURI(lorem)