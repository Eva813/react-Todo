
import { Routes, Route, Link } from "react-router-dom";
function NotFound() {
  return (
    <>
      <main>
        <h2>你的網址出錯了</h2>
        <p>
          回到首頁吧
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default NotFound;
