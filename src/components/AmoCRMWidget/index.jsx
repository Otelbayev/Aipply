import { useEffect } from "react";

function AmoCRMWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://gso.amocrm.ru/js/button.js";
    script.async = true;
    document.head.appendChild(script);

    window.amo_social_button = {
      id: "423567",
      hash: "6707c0a1abf6f7eda90add4d1f53b5bce3e4b859d58b24f5b2a7d91da51481d4",
      locale: "ru",
      inline: false,
      setMeta: function (p) {
        this.params = (this.params || []).concat([p]);
      },
    };
  }, []);

  return null;
}

export default AmoCRMWidget;
