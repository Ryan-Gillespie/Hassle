const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Set up this App'},
        'task-2': { id: 'task-2', content: 'Make it multi-list'},
        'task-3': { id: 'task-3', content: 'Add User Input'},
        'task-4': { id: 'task-4', content: 'Style The Whole Thing'},
        'task-5': { id: 'task-5', content: 'Eat Breakfast'},
        'task-6': { id: 'task-6', content: 'Update Github'}
    },
    columns: {
        'column-0': { 
            id: 'column-0',
            title: 'Back Burner',
            taskIds: ['task-6']
        },
        'column-1': {
            id: 'column-1', 
            title: 'ToDo',
            taskIds: ['task-2', 'task-3', 'task-4']
        },
        'column-2': {
            id: 'column-2',
            title: 'In Progress',
            taskIds: ['task-1']
        },
        'column-3': { 
            id: 'column-3', 
            title: 'Complete', 
            taskIds: ['task-5']
        }
    },
    // facilitate reordering of Columns
    columnOrder: ['column-0', 'column-1', 'column-2', 'column-3'],
}

export default initialData