// /**sort[cps][]  0: p, 1: img        //thứ tự của image và text
//      * children_part_content[cps][]  // Nội dung
//      * parent_part_title            //title parent_part 
//      * children_part_title[]        //title 1,2,3,... nhỏ
//     */


// function childrenPartHandler(query) {
//     return query.children_part_title.map((value, index) => {
//         return {
//             index: index + 1,
//             title: value,
//             content: query.children_part_content[index],
//             sort: query.sort[index],
//         };
//     })
// }
// return {
//     type: query.type,
//     parent_part: { title: query.parent_part_title },
//     children_parts: childrenPartHandler(query),
// };


/** Main function */
function storeDocument(requestBody) {

    // console.log(requestBody);
    const { parentPartTitle, childrenPartContent, type } = requestBody;
    return obj = {
        type,
        parent_part: { title: parentPartTitle.title },
        children_parts: childrenPartContent.map((value, index) => {
            const ChildrenPartTitle = value.content.shift();
            value.sort.shift();
            return {
                content: value.content,
                sort: value.sort,
                index,
                title: ChildrenPartTitle,
            }
        })
    }
    return {};
}

module.exports = storeDocument;