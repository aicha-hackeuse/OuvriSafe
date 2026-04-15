import fs from 'node:fs';
import path from 'node:path';
import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node';

const dir = process.cwd();
const token = process.env.GITHUB_TOKEN;

async function runGit() {
    try {
        console.log('--- Git Operations Start ---');
        
        // 1. Init
        console.log('Initializing repository...');
        try {
            await git.init({ fs, dir });
        } catch (e) {
            console.log('Repo already initialized or error:', e.message);
        }

        // 2. Add files
        console.log('Adding specific files...');
        await git.add({ fs, dir, filepath: 'README.md' });
        await git.add({ fs, dir, filepath: '.gitignore' });

        // 3. Commit
        console.log('Committing...');
        await git.commit({
            fs,
            dir,
            message: 'first commit',
            author: {
                name: 'OuvriSafe User',
                email: 'user@ouvrisafe.com'
            }
        });

        // 4. Branch
        console.log('Setting branch to main...');
        try {
            const sha = await git.resolveRef({ fs, dir, ref: 'HEAD' });
            await git.branch({ fs, dir, ref: 'main', object: sha });
        } catch (e) {
            console.log('Branch main already exists, moving on.');
        }

        // 5. Remote
        console.log('Adding/Updating remote...');
        try {
            await git.addRemote({
                fs,
                dir,
                remote: 'origin',
                url: 'https://github.com/aicha-hackeuse/OuvriSafe.git'
            });
        } catch (e) {
            console.log('Remote origin already exists.');
        }

        // 6. Push
        console.log('Pushing local main to remote main...');
        const pushResult = await git.push({
            fs,
            http,
            dir,
            remote: 'origin',
            ref: 'main',
            remoteRef: 'main',
            force: true,
            onAuth: () => ({ username: 'aicha-hackeuse', password: token })
        });

        console.log('Push result:', JSON.stringify(pushResult, null, 2));
        console.log('--- Git Operations Complete ---');

    } catch (err) {
        console.error('Error during git operations:', err.stack);
        process.exit(1);
    }
}

runGit();
