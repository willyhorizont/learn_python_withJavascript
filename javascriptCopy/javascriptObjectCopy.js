const customLog = ({ message = '>', data = 1 }) => console.log(message + '\n', data, '\n\n\n');
const logDivider = (title = '=') => console.log('\n' + '='.repeat(5) + ' ' + title + ' ' + '='.repeat(5) + '\n\n\n');

logDivider(new Date().toLocaleString());

const developer1 = {
    name: 'willy',
    // spread operator not work here
    skills: {
        primary: 'javascript',
        secondary: 'python'
    },
    // spread operator and JSON copy trick not work here
    sayHi: function(){
        return 'Hi'
    },
    createdAt: new Date()
};
customLog({ message: 'developer1:', data: developer1 });

// const developer2 = developer1;
// const developer2 = Object.assign({}, developer1);
// const developer2 = { ...developer1 };
const developer2 = JSON.parse(JSON.stringify(developer1));
developer2.name = 'iddo';
developer2.skills.primary = 'PHP';

customLog({ message: 'developer1:', data: developer1 });
customLog({ message: 'developer2:', data: developer2 });
