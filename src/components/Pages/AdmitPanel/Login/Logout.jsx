import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        // Очищаем токен из localStorage при размонтировании компонента
        localStorage.removeItem('token');

        // Перенаправляем пользователя на страницу входа
        navigate('/administrator/login');
    }, [navigate]);

    return null; // Компонент не рендерит ничего, поскольку он выполняет действия при размонтировании
}

