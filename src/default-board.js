import {uuid} from './utils'

export default {
    name:'workshop',
    columns:[
        {
            name:'Todo',
            color:'aqua',
            tasks:[
                {
                    description:'123123',
                    name: 'Дополнить информацию о себе для резюме и сайта',
                    id: uuid(),
                    userAssigned:null,
                },
                {
                    description:'4123125215',
                    name: 'second task',
                    id: uuid(),
                    userAssigned:null
                },
                {
                    description:'',
                    name: 'third task',
                    id: uuid(),
                    userAssigned:null
                },
            ]
        },
        {
            name:'In Progress',
            color:'red',
            tasks:[
                {
                    description:'',
                    name: 'first task',
                    id: uuid(),
                    userAssigned:null
                },
                {
                    description:'',
                    name: 'second task',
                    id: uuid(),
                    userAssigned:null
                },
                {
                    description:'',
                    name: 'third task',
                    id: uuid(),
                    userAssigned:null
                },
            ]
        },
        {
            name:'Done',
            color:'green',
            tasks:[
                {
                    description:'',
                    name: 'first task',
                    id: uuid(),
                    userAssigned:null
                },
                {
                    description:'',
                    name: 'second task',
                    id: uuid(),
                    userAssigned:null
                },
                {
                    description:'',
                    name: 'third task',
                    id: uuid(),
                    userAssigned:null
                },
            ]
        },

    ]
}