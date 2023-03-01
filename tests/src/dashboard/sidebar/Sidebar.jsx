import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">Dashboard</span>
         </div>
      <div className="center">
       <ul>
        <li>
            <span>Analytics</span>
        </li>
        <li>
            <span>Students</span>
        </li>
        <li>
            <span>Announcement</span>
        </li>
        <li>
            <span>Create Test</span>
             <ul>
             <li>
            <span>TW-test</span>
        </li>
        <li>
            <span>Partner-test</span>
        </li>
             </ul>
        </li>
        <li>
            <span>Wallet Options</span>
        </li>
        <li>
            <span>Withdrawal Request</span>
        </li>
        <li>
            <span>Toasts Notifications</span>
        </li>
        <li>
            <span>Manage Studio</span>
        </li>
        <li>
            <span>Brand Studio(Campaigns)</span>
        </li>
        <li>
            <span>Coaching Institute</span>
        </li>
       </ul>
      </div>
    </div>
  )
}

export default Sidebar;

