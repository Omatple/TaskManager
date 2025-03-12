import { Link } from "react-router-dom";
import { FaHome, FaTasks, FaClipboardList } from "react-icons/fa";

function HeaderComponent() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg py-3">
                <div className="container">
                    <Link className="navbar-brand fw-bold text-light d-flex align-items-center gap-2" to="/">
                        <FaClipboardList size={24} /> Task Manager
                    </Link>
                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav text-center gap-lg-4 gap-2 mt-4">
                            <li className="nav-item">
                                <Link className="nav-link text-light fw-semibold d-flex align-items-center gap-2" to="/">
                                    <FaHome size={18} /> Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light fw-semibold d-flex align-items-center gap-2" to="/tasks">
                                    <FaTasks size={18} /> Tasks
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default HeaderComponent;