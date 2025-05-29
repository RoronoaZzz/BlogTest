import '../main.css';
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="header__title">Блог</h1>
                <p className="header__descr">Здесь мы&nbsp;делимся интересными кейсами из&nbsp;наших проектов, пишем про&nbsp;IT, а&nbsp;также переводим зарубежные статьи</p>
            </div>
        </header>
    );
};

export default Header;
