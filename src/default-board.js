

export default {
    name:'workshop',
    columns:[
        {
            name:'todo',
            tasks:[
                {
                    description:'',
                    name: 'first task',
                    id: uuid(),
                    userAssigned:null
                }
            ]
        }
    ]
}