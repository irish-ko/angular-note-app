import {Note} from "./note";

export interface Store {
    activeNote: Note[];
    archiveNote: Note[];
    lastId: number;
    categories:string[];
}

export const store : Store =
{
    lastId: 7,
    categories: [
        'Task',
        'Random Thought',
        'Idea'
    ],

   activeNote:  [
        {
            id: 1,
            name: '1',
            createDate: 'April 20, 2021',
            category: 'Task',
            content: 'Tomate, bread',
            contentDate: '2021',
            isEdit: true,
        },
        {
            id: 2,
            name: '2',
            createDate: 'April 20, 2021',
            category: 'Task',
            content: 'Tomate, bread',
            contentDate: '2021',
            isEdit: true,
        },
        {
            id: 3,
            name: '3',
            createDate: 'April 20, 2021',
            category: 'Task',
            content: 'Tomate, bread',
            contentDate: '2021',
            isEdit: true,
        },
        {
            id: 4,
            name: '4',
            createDate: 'April 20, 2021',
            category: 'Task',
            content: 'Tomate, bread',
            contentDate: '2021',
            isEdit: true,
        }],

    archiveNote: [
        {
            id: 5,
            name: '5',
            createDate: 'April 20, 2021',
            category: 'Task',
            content: 'Tomate, bread',
            contentDate: '2021',
            isEdit: true,
        },
        {
            id: 6,
            name: '6',
            createDate: 'April 20, 2021',
            category: 'Task',
            content: 'Tomate, bread',
            contentDate: '2021',
            isEdit: true,
        },
        {
            id: 7,
            name: '7',
            createDate: 'April 20, 2021',
            category: 'Task',
            content: 'Tomate, bread',
            contentDate: '2021',
            isEdit: true,
        }
    ]
};

