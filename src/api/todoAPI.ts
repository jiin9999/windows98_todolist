import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import { selectUserName } from '../store/userSlice';

export const callTodos = async (userName: string) => {
    const docRef = doc(db, 'todos', userName);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const data = docSnap.data();
        return data.list;
    } else {
        const newTodoList = { list: [] };
        await setDoc(docRef, newTodoList);
        return newTodoList.list;
    }
};
