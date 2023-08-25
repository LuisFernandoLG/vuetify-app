export const initialNoteLists = ([{
    id: 1,
    title: 'Work',
    notes: [
        {
            id: 1,
            title: 'Note 1',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eu ultricies aliquam, nunc sapien aliquet urna, vitae aliqua',
            color: '#f44336',
            tags: ['tag1', 'tag2'],
            attached: false,
            date: Date.now(),

        },

        {
            id: 2,
            title: 'Note 2',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eu ultricies aliquam, nunc sapien aliquet urna, vitae aliqua',
            color: 'green',
            tags: ['tag1', 'tag2'],
            date: Date.now(),
            attached: true,
        },
        {
            id: 3,
            title: 'Note 3',
            content:
                'Lorem ipsum ',
            color: 'yellow',
            tags: ['tag1', 'tag2'],
            date: Date.now(),
            attached: false,
        },
    ]
}, {
    id: 2,
    title: 'School',
    notes: [
        {
            id: 1,
            title: 'Note 1',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eu ultricies aliquam, nunc sapien aliquet urna, vitae aliqua',
            color: '#f44336',
            tags: ['tag2'],
            attached: false,
            date: Date.now(),
        }]
}])

export const initialTags = ([
    {
        id: 1,
        name: 'tag1',
        color: '#f44336',
    },
    {
        id: 2,
        name: 'tag2',
        color: 'green',
    },
    {
        id: 3,
        name: 'tag3',
        color: 'yellow',
    },
    {
        id: 4,
        name: 'tag4',
        color: 'blue',
    },
])
