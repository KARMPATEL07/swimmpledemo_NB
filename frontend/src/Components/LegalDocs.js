import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Health <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum quae! Maxime a minus hic totam officiis nobis. Quas harum ipsam vel facilis sint recusandae maiores dolor soluta repellat nam!
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis in hic repellendus, asperiores quod aliquid maxime eveniet dolore cupiditate, explicabo tempore inventore illum tempora reprehenderit repellat nulla eum. Ut.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sapiente magni dolorem, quas in eligendi deleniti tempore quam laborum libero ullam quibusdam excepturi nostrum error pariatur perspiciatis reiciendis quisquam iusto!
        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse eos hic unde quisquam ex accusamus dolore at maxime reiciendis minus? Eligendi ut amet quidem error eius at eum neque modi?
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
          orem
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod!
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2013-2023 Swimmple. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
