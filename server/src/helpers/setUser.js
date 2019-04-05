import fs from 'fs';
import util from 'util';
import { getUser } from './';
const writeFile = util.promisify(fs.writeFile);

export default async function setUser(user) {
  try {
    let currentUser = await getUser(user.id)
    const newUser = Object.assign(currentUser, user);
    return writeFile(`./data/users/${newUser.id}.json`, JSON.stringify(newUser));
  } catch {
    return Promise.reject("Unable to find or update user")
  }
}
