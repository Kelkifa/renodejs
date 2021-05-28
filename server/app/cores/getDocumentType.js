function getDocumentType(documents) {
    var documentCopy = documents.map(value => value.type);
    return Array.from(new Set(documentCopy));
}

module.exports = getDocumentType;