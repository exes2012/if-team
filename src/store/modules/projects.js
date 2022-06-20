export default {
    namespaced: true,
    state(){
        return{
            projectsList: [
                {
                    id:1,
                    title:'Project 1',
                    tasksQuantity:2,
                    client: 'Николаев И.В.',
                    deadline: '30 апреля',
                    budgetUsage: '12%',
                    expenses: '$200',
                    paid:'$1000 из $2000',
                    leader: 'Олег Фролов',
                    photo:'',
                },
                {
                    id:2,
                    title:'Project 2',
                    tasksQuantity:2,
                    client: 'Николаев И.В.',
                    deadline: '30 апреля',
                    budgetUsage: '12%',
                    expenses: '$200',
                    paid:'$1000 из $2000',
                    leader: 'Олег Фролов',
                    photo:'',
                },
            ]
        }
    }
}