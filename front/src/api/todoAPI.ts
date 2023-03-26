export const API_URL = 'http://localhost:3001/api/todos';
import axios from 'axios';

// Fetch todos from the server
export const fetchTodos = async (): Promise<string[]> => {
    try {
        const response = await axios.get<string[]>(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching todos:', error);
        return [];
    }
};

// Add todo to the server
export const addTodo = async (text: string): Promise<{ message: string; data: string } | undefined> => {
    try {
        const response = await axios.post<{ message: string; data: string }>(API_URL, { text });
        return response.data;
    } catch (error) {
        console.error('Error adding todo:', error);
    }
};

// Update todo on the server
export const updateTodo = async (
    index: number,
    text: string,
): Promise<{ message: string; data: string } | undefined> => {
    try {
        const response = await axios.put<{ message: string; data: string }>(`${API_URL}/${index}`, { text });
        return response.data;
    } catch (error) {
        console.error('Error updating todo:', error);
    }
};

// Delete todo from the server
export const deleteTodo = async (index: number): Promise<{ message: string } | undefined> => {
    try {
        const response = await axios.delete<{ message: string }>(`${API_URL}/${index}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting todo:', error);
    }
};
