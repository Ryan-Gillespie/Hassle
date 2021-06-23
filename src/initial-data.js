const initialData = {
    tasks: {
        'task-1': { id: 'task-1', title: 'Set up this App', content: 'Learn how to react.js'},
        'task-2': { id: 'task-2', title: 'Make it multi-list', content: 'Multiple Collumns go brrrr'},
        'task-3': { id: 'task-3', title: 'Add User Input', content: 'this needs a form'},
        'task-4': { id: 'task-4', title: 'Style The Whole Thing', content: 'Write some CSS babey'},
        'task-5': { id: 'task-5', title: 'Eat Breakfast', content: 'Most important meal babey'},
        'task-6': { id: 'task-6', title: 'Update Github', content: 'Current Username and documentation SUCK'}
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