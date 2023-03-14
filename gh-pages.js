import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/dsm-72/dsm-72.git', // Update to point to your repository
        user: {
            name: 'dsm-72',
            email: 'dsm-72'
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);