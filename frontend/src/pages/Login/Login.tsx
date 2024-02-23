import AuthButton from "../../components/AuthButton/AuthButtons";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import "./Login.scss";

interface LoginProps {}

function Login({}: LoginProps) {
    return (
        <div className="login-page">
            <NavigationBar />
            <AuthButton />
        </div>
    );
}

export default Login;
