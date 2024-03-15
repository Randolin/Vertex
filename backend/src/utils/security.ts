import crypto from 'crypto';
import { config } from '../index';

export function getHashedID(id: string): string {
  return crypto.createHash('sha256').update(id).digest('hex');
}

export function getPrivateID(): string {
  const wordList = config.wordList;
  const randomIndexes = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    randomIndexes.push(randomIndex);
  }
  const privateID = randomIndexes.map(index => wordList[index]).join('-');
  console.log(privateID);
  return privateID;
}