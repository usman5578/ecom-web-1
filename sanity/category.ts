export const category ={
    name: "category",
    title: "Product Category",
    type: "document",
    fields: [
        {
            name:"name",
            title: "Category Name",
            type: "document",
            fields: [
                {
                    name:"name",
                    title: "Category Name",
                    type:"string"
                }
            ]
        }
    ]
}