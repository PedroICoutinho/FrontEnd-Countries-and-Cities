import toast, { Toaster } from "react-hot-toast";

export function ButtonFunction(props) {
  function handleConfirmation() {
    toast((t) => (
      <span>
        {props.confirmationText}
        <button onClick={() => toast.dismiss(t.id)}>No</button>{" "}
        <button
          onClick={() => {
            props.functionForExecution();
            toast.dismiss(t.id);
          }}
        >
          Yes
        </button>
      </span>
    ));
  }

  return (
    <>
      <Toaster />
      <button onClick={handleConfirmation}>{props.children}</button>
    </>
  );
}