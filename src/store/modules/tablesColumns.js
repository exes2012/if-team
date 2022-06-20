export default {
    namespaced: true,
    state() {
        return{
            projectsTableColumns: [
                {
                    field: "title",
                    header: "Project name",
                    sortable: true,
                },
                {
                    field: "tasksQuantity",
                    header: "Tasks",
                    sortable: true,
                },
                {
                    field: "client",
                    header: "Client",
                    sortable: true,
                },
                {
                    field: "deadline",
                    header: "Finish",
                    sortable: true,
                },
                {
                    field: "budgetUsage",
                    header: "Budget usage",
                    sortable: true,
                },
                {
                    field: "expenses",
                    header: "Other Expenses",
                    sortable: true,
                },
                {
                    field: "paid",
                    header: "Paid",
                    sortable: true,
                },
                {
                    field: "leader",
                    header: "Leader",
                    sortable: true,
                },
                {
                    field: "actions",
                    header: "",
                    sortable: true,
                },
            ]
        }
    }
}