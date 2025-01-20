import Style from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={Style.footer}>
        <h1 className={Style.heading}>KA.</h1>
        <p className={Style.para}>
          Designed and built by{" "}
          <span className={Style.span}>Kshitij Agrawal</span> with{" "}
          <span className={Style.span}>Love</span> &{" "}
          <span className={Style.span}>Coffee</span>
        </p>
        <p className={Style.para}>&#169; 2024 KA. All rights reserved.</p>
        <div className="flex space-x-4 -mt-2">
          <img
            className="inline-block mt-1 h-6 w-6 bg-cover cursor-pointer"
            src={require("../documents/GitHub.png")}
            alt="GitHub"
            onClick={() =>
              window.open("https://github.com/krish3742", "_blank")
            }
          />
          <img
            className="inline-block h-8 w-8 bg-cover cursor-pointer"
            src={require("../documents/Linkedin.png")}
            alt="Linkedin"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/kshitij-agrawal-864528208/",
                "_blank"
              )
            }
          />
          <img
            className="inline-block mt-1 h-6 w-6 bg-cover cursor-pointer"
            src={require("../documents/Instagram.png")}
            alt="Instagram"
            onClick={() =>
              window.open(
                "https://www.instagram.com/kshi.tizagrawal?igsh=c2R4dTdqdmQybXRp&utm_source=qr",
                "_blank"
              )
            }
          />
          <img
            className="inline-block h-8 w-8 bg-cover cursor-pointer"
            src={require("../documents/Twitter.png")}
            alt="Twitter"
            onClick={() =>
              window.open("https://x.com/Kshitij96248017", "_blank")
            }
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
