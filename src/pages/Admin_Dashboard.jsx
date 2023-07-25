import React from 'react';
import '../styles/Admin_Dashboard.css';

const Admin_Dashboard = () => {
  return (
    <section id='admin'>
      <div className="blogs">
        <h1>Admin panal</h1>

        <form className="example" action="">
          <input type="text" placeholder="Search for Blogs" name="search" />
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>



      </div>



    </section>
  )
}

export default Admin_Dashboard