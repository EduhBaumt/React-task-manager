import { Toaster } from "sonner";

import Sidebar from "./Sidebar.jsx";
import Tasks from "./Tasks.jsx";

function App() {
  return (
    <div className="flex">
      <Toaster richColors />
      <Sidebar />
      <Tasks />
    </div>
  );
}

export default App;
