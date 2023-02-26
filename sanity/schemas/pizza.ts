// import { array } from "prop-types";
import { SchemaTypeDefinition } from "sanity";

const pizza:SchemaTypeDefinition = {   

    name: 'pizza',
    title: 'pizza',
    type: "document",
    fields: [  

        {
           name: 'image',
           title: 'image',
           type: 'image',
           options: {
           hotspot: true
           } 
        },
        {
            name: 'name',
            title: 'name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90
            }
        },
        {
            name: 'price',
            title: 'price',
            type: 'array',
            of :[{type: 'number', to:[{type: 'pizza'}]}]
        },
        {
            name: 'details',
            title: 'details',
            type: 'string'
        }
    ]
}

export default pizza