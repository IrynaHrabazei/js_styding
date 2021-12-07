// - Є масив
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


for (const course of coursesArray) {
    let wrap = document.createElement('div');
    wrap.classList.add('wrapper');
    let title = document.createElement('div');
    title.classList.add('general__style');
    title.innerText = course.title;
    let duration__wrap = document.createElement('div');
    duration__wrap.classList.add('duration__wrapper');
    let monthDuration = document.createElement('div');
    monthDuration.classList.add('monthDuration__wrapper');
    monthDuration.innerText = course.monthDuration;
    let hourDuration = document.createElement('div');
    hourDuration.classList.add('hourDuration__wrapper');
    hourDuration.innerText = course.hourDuration;
    let ul = document.createElement('ul');
    ul.classList.add('list__wrapper');
    for (const skill of course.modules) {
        let li = document.createElement('li');
        li.innerText = skill;
        ul.appendChild(li);
    }


    wrap.appendChild(title);
    wrap.appendChild(duration__wrap);
    duration__wrap.appendChild(monthDuration);
    duration__wrap.appendChild(hourDuration);
    wrap.appendChild(ul);
    document.body.appendChild(wrap);
}


