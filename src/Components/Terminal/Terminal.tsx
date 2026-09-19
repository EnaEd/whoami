import "./Terminal.css";

export const Terminal = () => {
    return (
        <div>
            <span className="terminal-command">$ dotnet run edena</span>
            <span className="terminal-line">
                <span className="terminal-label">name:</span>
                <span className="terminal-value">Eduard End</span>
            </span>
            <span className="terminal-line">
                <span className="terminal-label">role:</span>
                <span className="terminal-value">.NET Backend Developer</span>
            </span>
            <span className="terminal-line">
                <span className="terminal-label">base:</span>
                <span className="terminal-value">Kharkiv, Ukraine</span>
            </span>
            <span className="terminal-line">
                <span className="terminal-label">focus:</span>
                <span className="terminal-value">C# • .NET Core • EF Core • MS SQL • Docker</span>
            </span>
            <span className="terminal-line">
                <span className="terminal-label">status:</span>
                <span className="terminal-value">available for freelance & full-time</span>
            </span>
            <span className="terminal-cursor">$ █</span>
        </div>

    )
}