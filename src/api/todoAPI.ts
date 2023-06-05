import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import { useSelector } from 'react-redux';
import { selectUserName } from '../store/userSlice';

const userName = useSelector(selectUserName);
const docRef = doc(db, 'todos', userName);

export const callTodos = async (userName: string) => {
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
