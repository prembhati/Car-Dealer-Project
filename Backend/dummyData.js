import faker from 'faker';
import { createUser } from './models/userModel';
import { connectDB } from './config/db';

const createDummyUsers = async (numUsers) => {
    await connectDB();
    for (let i = 0; i < numUsers; i++) {
        const name = faker.name.findName();
        const email = faker.internet.email();
        const password = faker.internet.password();
        await createUser({ name, email, password });
    }
    console.log(`${numUsers} dummy users created`);
};

createDummyUsers(10)
    .then(() => {
        console.log('Dummy data creation complete');
        process.exit();
    })
    .catch((error) => {
        console.error('Error creating dummy data:', error);
        process.exit(1);
    });
