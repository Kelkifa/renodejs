/**sort[cps][]  0: p, 1: img        //thứ tự của image và text
     * children_part_content[cps][]  // Nội dung
     * parent_part_title            //title parent_part 
     * children_part_title[]        //title 1,2,3,... nhỏ
    */


function childrenPartHandler(query) {
    return query.children_part_title.map((value, index) => {
        return {
            index: index + 1,
            titlle: value,
            content: query.children_part_content[index],
            sort: query.sort[index],
        };
    })
}
/** Main function */
function storeDocument(query) {
    return {
        type: query.type,
        parent_part: { title: query.parent_part_title },
        children_parts: childrenPartHandler(query),
    };
}

module.exports = storeDocument;