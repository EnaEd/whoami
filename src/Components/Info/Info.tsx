import "./Info.css";

export const Info = () => {
    return (
        <div>
            <div className="command">$ whoami</div>
            <h1>Eduard Ena</h1>
            <div className="divider"></div>
            <h2>.NET Backend<br/>Developer</h2>

            <p>
                Specializing in building high-load, fault-tolerant backend systems.
                I design clean architecture, develop RESTful/gRPC APIs, and optimize database performance.
                My focus is on delivering high performance, scalability, and secure code within the Microsoft .NET ecosystem.
            </p>

            <div className="buttons-group">
                <a href="#" className="btn-primary">See projects &rarr;</a>
                <a href="#" className="btn-secondary">Discuss</a>
            </div>
        </div>
)
}