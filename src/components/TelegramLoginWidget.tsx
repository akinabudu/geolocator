import React, { useRef, useEffect, FunctionComponentElement } from "react";
import PropTypes from "prop-types";

interface props {
  botName: string;
  className: string;
  dataOnauth: any;
  dataAuthUrl: any;
  buttonSize: "large" | "medium" | "small";
  cornerRadius: any;
  requestAccess: string;
  usePic: any;
  lang: string;
}

const TelegramLoginButton = ({
  botName,
  buttonSize,
  className,
  cornerRadius,
  requestAccess,
  usePic,
  dataOnauth,
  dataAuthUrl,
  lang,
}: props) => {
  const instance = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (instance) {
      (window as any).TelegramLoginWidget = {
        dataOnauth: (user: any) => {
          dataOnauth(user);
        },
      };

      const script = document.createElement("script");
      script.src = "https://telegram.org/js/telegram-widget.js?14";
      script.setAttribute("data-telegram-login", botName);
      script.setAttribute("data-size", buttonSize);
      if (cornerRadius !== undefined) {
        script.setAttribute("data-radius", cornerRadius);
      }
      script.setAttribute("data-request-access", requestAccess);
      script.setAttribute("data-userpic", usePic);
      script.setAttribute("data-lang", lang);
      if (dataAuthUrl !== undefined) {
        script.setAttribute("data-auth-url", dataAuthUrl);
      } else {
        script.setAttribute(
          "data-onauth",
          "TelegramLoginWidget.dataOnauth(user)"
        );
      }
      script.async = true;

      instance.current && instance.current.appendChild(script);
    }
  }, [instance]);

  return (
    <>
      <div ref={instance} className={className} />
      {/* {console.log(script)} */}
    </>
  );
};

export default TelegramLoginButton;
