import icon from "../../assets/img/notification-icon.svg";

import { BASE_URL } from "../../utils/request";

import "./styles.css";

import axios from "axios";
import { toast } from "react-toastify";

type Props = {
  saleId: number;
};

export function NotificationButton({ saleId }: Props) {
  function handleClick(id: number) {
    axios.get(`${BASE_URL}/sales/${id}/notification`).then(() => {
      toast.info("SMS Enviado com sucesso!"); // pop-up do sms
    });
  }

  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Notificar" />
    </div>
  );
}
