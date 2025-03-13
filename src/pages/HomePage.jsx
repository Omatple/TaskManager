import { FaRegCalendarCheck } from "react-icons/fa";
import HeaderComponent from "../components/HeaderComponent"

function HomePage() {
    return (
        <>
            <HeaderComponent />
            <section className="container d-flex flex-column align-items-center justify-content-center text-center min-vh-100">
                <FaRegCalendarCheck size={80} className="text-primary mb-4" />
                <h1 className="text-light fw-bold">Welcome to Task Manager</h1>
                <p className="text-secondary">Organize your tasks efficiently and stay productive.</p>
            </section>
        </>
    );
}

export default HomePage
