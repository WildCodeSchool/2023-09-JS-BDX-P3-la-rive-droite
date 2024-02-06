import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "#c91f61", color: "white" }}
      >
        &copy; {new Date().getFullYear()} Copyright :{" "}
        <a
          className="text-light"
          href="https://www.externatic.fr/"
          target="_blank"
          rel="noreferrer"
        >
          Externatic.com
        </a>
      </div>
    </MDBFooter>
  );
}
