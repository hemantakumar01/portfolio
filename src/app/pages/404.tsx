import React from "react";

function Custom404() {
  return (
    <div className="custom-404">
      <h1>Oops!-------------- Page not found.</h1>
      <p>We cant seem to find the page youre looking for.</p>
      <a href="/">Go back to the homepage</a>
      <style jsx>{`
        .custom-404 {
          /* Add your custom CSS styles here */
        }
      `}</style>
    </div>
  );
}

export default Custom404;
