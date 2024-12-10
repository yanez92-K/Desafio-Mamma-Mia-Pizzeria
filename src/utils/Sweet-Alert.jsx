
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const showSweetAlert = ({ success, message, list }) => {
  const MySwal = withReactContent(Swal);

  const Icon = success ? FaRegCircleCheck : MdOutlineReportGmailerrorred;

  const formattedMessage = (
    <div>
      <p className="d-flex align-items-center my-1">
        <Icon size="1.4rem" />
        <span className="ms-2">{message}</span>
      </p>
      {list?.map((line, i) => (
        <p key={i} className="d-flex align-items-center my-1">
          <Icon size="1.2rem" />
          <span className="ms-2">{line}</span>
        </p>
      ))}
    </div>
  );

  MySwal.fire({
    title: success ? "¡Éxito!" : "¡Error!",
    icon: success ? "success" : "error",
    html: formattedMessage,
    confirmButtonText: "Ok!",
    confirmButtonColor: "#333",
  });
};
